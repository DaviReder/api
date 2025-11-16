export async function POST(req) {
  const { texto } = await req.json();

  if (!texto) {
    return Response.json({ error: "Nenhum texto enviado" }, { status: 400 });
  }

  return Response.json({
    recebido: texto,
    analisado: true,
    resultado: "OK"
  });
}
