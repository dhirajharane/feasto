export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: "Missing url parameter" });
    return;
  }
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Origin': 'https://www.swiggy.com',
        'Referer': 'https://www.swiggy.com/',
      },
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`Swiggy API Error (${response.status}): ${errorText}`);
        res.status(response.status).json({ error: "Failed to fetch from Swiggy API", details: errorText });
        return;
    }

    const contentType = response.headers.get("content-type");
    const data = await response.text();
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", contentType || "application/json");
    
    res.status(200).send(data);

  } catch (err) {
    console.error("Proxy Error:", err.message);
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}