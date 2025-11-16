import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { text } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-flash" });

    const prompt = `
    Analise se o texto abaixo parece ser fake news.
    Responda com uma porcentagem de suspeita.
    Texto: "${text}"
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return new Response(JSON.stringify({ result: response }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
