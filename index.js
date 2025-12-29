export default {
  async fetch(request) {
    const url = new URL(request.url);
    const endpoint = url.searchParams.get("endpoint");
    if (!endpoint) {
      return new Response(JSON.stringify({ error: "Missing endpoint" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
    const mexcUrl = "https://api.mexc.com" + endpoint;
    const res = await fetch(mexcUrl);
    const data = await res.text();
    return new Response(data, {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
};
