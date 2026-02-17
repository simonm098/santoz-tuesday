
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Strictly following the Google GenAI SDK initialization guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  }

  async getPartsAdvice(query: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: "You are an expert automotive parts specialist for Santos Motors on Kirinyaga Road, Kenya. Provide helpful, concise advice on car maintenance and part selection. Mention that customers can reach out via WhatsApp at 0720658825.",
        },
      });
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Hello! I'm currently tuning my gears. Please contact us directly at 0720658825 for expert advice.";
    }
  }
}

export const gemini = new GeminiService();
