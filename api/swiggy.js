export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: "Missing url parameter" });
    return;
  }
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        // Add any other headers Swiggy expects here
      },
    });
    const contentType = response.headers.get("content-type");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", contentType || "application/json");
    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}