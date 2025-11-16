import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Missing text" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Avalie o seguinte texto e me dê:
    - Uma porcentagem de probabilidade de ser fake news (0–100%)
    - Uma justificativa curta

    Texto:
    ${text}
    `;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    res.status(200).json({ analysis: output });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
