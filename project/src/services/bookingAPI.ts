// src/services/bookingAPI.ts

const BASE_URL = "https://kalvium-project.onrender.com/api/hotels";
const AI_BASE_URL = "https://kalvium-project.onrender.com/api/ai";

// Function to search hotels by destination
export const searchHotels = async (destination: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?destination=${encodeURIComponent(destination)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching hotels:', error);
    throw error;
  }
};

// Function to generate itinerary using AI
export const generateItinerary = async (prompt: string) => {
  try {
    const response = await fetch(`${AI_BASE_URL}/generate-itinerary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating itinerary:', error);
    throw error;
  }
};
