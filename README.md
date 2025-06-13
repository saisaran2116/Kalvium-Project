# TripSculptor - AI-Powered Indian Travel Planning

TripSculptor is a modern travel planning platform that helps users discover and plan their perfect Indian adventure. Using AI-powered recommendations, it creates personalized itineraries based on interests, season, and budget.

## Features

- AI-powered trip planning
- Hotel booking integration
- Interactive destination discovery
- Personalized itinerary generation
- Real-time weather information
- Location mapping and navigation

## Tech Stack

### Frontend
- React.js with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Lucide React for icons
- Axios for API calls

### Backend
- Node.js with Express
- Google Gemini AI API integration
- OpenWeather API integration
- MakCorps Hotel API integration
- RapidAPI for geocoding

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd tripsculptor
\`\`\`

2. Install frontend dependencies:
\`\`\`bash
cd project
npm install
\`\`\`

3. Install backend dependencies:
\`\`\`bash
cd ../backend
npm install
\`\`\`

4. Set up environment variables:
Create a \`.env\` file in the backend directory with:
\`\`\`
GEMINI_API_KEY=your_gemini_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
RAPIDAPI_KEY=your_rapidapi_key
PORT=5000
\`\`\`

### Running the Application

1. Start the backend server:
\`\`\`bash
cd backend
npm run dev
\`\`\`

2. Start the frontend development server:
\`\`\`bash
cd project
npm run dev
\`\`\`

The application will be available at http://localhost:3000

## License

This project is licensed under the MIT License - see the LICENSE file for details.
