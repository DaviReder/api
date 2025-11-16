import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Texto ausente" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
Analise o seguinte texto e diga se parece ser fake news.
Retorne apenas:
- "Parece verdadeiro" ou "Parece falso"
- Uma porcentagem de confiança
Texto: """${text}"""
    `;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    res.status(200).json({ response: output });

  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
}
