export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        ok: true,
        service: "3903-command-center",
      });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;
