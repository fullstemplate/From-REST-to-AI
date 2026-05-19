import { GoogleGenAI } from '@google/genai';
import { model } from '@tensorflow/tfjs-node';

const ai = new GoogleGenAI({
  apiKey: process.env.API_GEMINI,
});

async function main() {
  const response = await ai.generateContent({
    model: 'gemini-1.5-pro',
    content: 'jelasi Ai untuk anak SD',
  });
  console.log(response);
}

main();
