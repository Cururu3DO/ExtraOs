export default function handler(req, res) {
  // 1. Pega parâmetro "msg" da URL
  const msg = req.query.msg || "Sem mensagem";

  // 2. Processa — aqui só um exemplo de transformar em caixa alta
  const processed = msg.toUpperCase();

  // 3. Retorna só texto puro
  res.setHeader("Content-Type", "text/plain");
  res.send(processed);
}
