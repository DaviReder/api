export async function POST(request) {
  const body = await request.json();
  const texto = body.texto;

  if (!texto) {
    return Response.json({ error: "Nenhum texto enviado" }, { status: 400 });
  }

  // Resposta de teste (pode substituir depois pelo Gemini)
  return Response.json({
    recebido: texto,
    analisado: true,
    resultado: "OK",
  });
}
