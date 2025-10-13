export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'Origin': 'https://www.swiggy.com',
    'Referer': 'https://www.swiggy.com/',
  };

  try {
    const response = await fetch(url, { headers });
    const responseText = await response.text();

    if (!response.ok) {
      console.error(`Swiggy API Error (${response.status}):`, responseText);
      return res.status(502).json({
        error: "Failed to fetch from Swiggy API",
        details: `Upstream server returned status ${response.status}`,
        body: responseText,
      });
    }

    try {
      const data = JSON.parse(responseText);
      return res.status(200).json(data);
    } catch (parseError) {
      console.error("JSON Parsing Error:", parseError);
      return res.status(500).json({
        error: "Proxy error: Failed to parse JSON response from Swiggy",
        details: parseError.message,
        body: responseText,
      });
    }

  } catch (err) {
    console.error("Proxy Fetch Error:", err);
    return res.status(500).json({ error: "Proxy internal error", details: err.message });
  }
}
