import fs from "node:fs";
import path from "node:path";

const VIRTUAL_ID = "virtual:public-gallery";
const RESOLVED_VIRTUAL = "\0virtual:public-gallery";

function readGalleryUrls(galleryDir) {
  try {
    return fs
      .readdirSync(galleryDir)
      .filter((f) => /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/images/gallery/${f}`);
  } catch {
    return [];
  }
}

function isInsideDir(dir, filePath) {
  const rel = path.relative(dir, filePath);
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
}

/**
 * Exposes every image URL under public/images/gallery as a static array at build time.
 */
export function publicGalleryPlugin() {
  const galleryDir = path.resolve(process.cwd(), "public/images/gallery");

  return {
    name: "public-gallery",
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_VIRTUAL;
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL) return null;
      const urls = readGalleryUrls(galleryDir);
      return `export default ${JSON.stringify(urls)}`;
    },
    configureServer(server) {
      try {
        fs.mkdirSync(galleryDir, { recursive: true });
      } catch {
        /* ignore */
      }
      server.watcher.add(galleryDir);
      const invalidate = () => {
        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL);
        if (mod) server.moduleGraph.invalidateModule(mod);
      };
      for (const ev of ["add", "unlink", "change"]) {
        server.watcher.on(ev, (file) => {
          if (isInsideDir(galleryDir, file)) invalidate();
        });
      }
    },
  };
}
