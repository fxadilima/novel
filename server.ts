import Server from "lume/core/server.ts";

const server = new Server({
    port: 4000,
    root: `${Deno.cwd()}/_site`,
});
server.start();
console.log("Listening on http://localhost:4000");
