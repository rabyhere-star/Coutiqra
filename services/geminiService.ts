
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCPOAdvice = async (userPrompt: string, section?: string) => {
  const systemInstruction = `
    You are the Chief Product Officer and Lead Solutions Architect of 'Coutiqra', a premium boutique fashion app.
    Your tone is professional, visionary, and high-end. 
    You provide strategic advice on brand identity, tech stack, and market entry.
    User is asking about: ${section || 'General Roadmap'}.
    Keep responses concise but insightful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently reviewing our strategic documents. Please try again in a moment.";
  }
};
