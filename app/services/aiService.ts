import { GoogleGenAI } from "@google/genai";

// FIX: Use optional chaining to safely access process.env.API_KEY, preventing a crash if `process` is undefined in the browser.
const ai = new GoogleGenAI({ apiKey: process?.env?.API_KEY });

/**
 * Gets an AI-generated response from the Gemini API.
 * @param prompt The user's prompt.
 * @returns A promise that resolves to the AI's text response.
 */
export const getAIResponse = async (prompt: string): Promise<string> => {
  // FIX: Use optional chaining here as well for safety.
  if (!process?.env?.API_KEY) {
    console.error("API_KEY environment variable not set.");
    return "API key not configured. Please contact support.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "I am your personal PilgrimPath guide for the Ujjain Simhastha. I'm here to help you directly. Ask me for the safest routes, where to find food, safety tips, or any other guidance you need. I will give you clear and concise answers in the language you use (English or Hindi). How can I assist you right now?",
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I am having trouble connecting to my knowledge base. Please try again later.";
  }
};