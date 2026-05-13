import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const template = fs.readFileSync(
    path.resolve(__dirname, "dist/index.html"),
    "utf-8",
  );

  const { render } = await import(
    pathToFileURL(path.resolve(__dirname, "dist/server/entry-server.js")).href
  );

  const appHtml = render();

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  fs.writeFileSync(path.resolve(__dirname, "dist/index.html"), html);
  console.log("✓ Prerendered HTML written to dist/index.html");
}

prerender().catch(console.error);
