import axios from 'axios';

const GEMINI_API_KEY = 'AIzaSyC0XtB49XjDUyi0u_CczTDMY8XIUiWz2-0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

async function generateDestinationCard(city) {
    try {
        const prompt = `Generate a destination card for ${city} with the following structure in JSON format:
        {
            "title": "A catchy title (max 10 words)",
            "description": "2-3 sentences describing the city",
            "top_attractions": ["3 main attractions or things to do"],
            "best_time_to_visit": "Best time to visit",
            "local_tip": "A local tip or fun fact"
        }`;

        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        // Extract the text from the response
        const generatedText = response.data.candidates[0].content.parts[0].text;
        
        // Try to parse the JSON response
        try {
            // Find JSON content within the response
            const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
            throw new Error('No valid JSON found in response');
        } catch (parseError) {
            console.error('Error parsing Gemini response:', parseError);
            throw new Error('Failed to parse Gemini response');
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw error;
    }
}

// New function for homepage: generate multiple cards based on month and trip type
async function generateDestinationCardsByType(month, tripType) {
    try {
        const prompt = `Suggest 3 Indian cities for a ${tripType} trip in ${month}. For each city, generate a destination card in the following JSON format (as an array):\n[
  {
    "title": "",
    "description": "",
    "top_attractions": ["", "", ""],
    "best_time_to_visit": "",
    "local_tip": ""
  },
  ...
]`;

        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const generatedText = response.data.candidates[0].content.parts[0].text;
        console.log('Gemini raw response:', generatedText);
        try {
            // Find JSON array in the response
            const jsonMatch = generatedText.match(/\[([\s\S]*)\]/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
            throw new Error('No valid JSON array found in response');
        } catch (parseError) {
            console.error('Error parsing Gemini response:', parseError);
            throw new Error('Failed to parse Gemini response');
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw error;
    }
}

export { generateDestinationCard, generateDestinationCardsByType }; 