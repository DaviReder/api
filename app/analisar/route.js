export async function POST(req) {
  try {
    const body = await req.json();
    const texto = body.texto;

    if (!texto) {
      return Response.json(
        { error: "Nenhum texto enviado" },
        { status: 400 }
      );
    }

    return Response.json({
      recebido: texto,
      analisado: true,
      resultado: "OK"
    });

  } catch (e) {
    return Response.json(
      { error: "Erro no servidor", details: e.message },
      { status: 500 }
    );
  }
}
