export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "Nenhum texto enviado" });
  }

  // EXEMPLO: só para testar que está funcionando
  res.status(200).json({
    recebido: texto,
    analisado: true,
    resultado: "OK"
  });
}
