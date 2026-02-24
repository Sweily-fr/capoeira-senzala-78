import fs from "fs";
import path from "path";

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".svg", ".webp"];

// Logos with these keywords in filename are dark and need invert to display white
const DARK_KEYWORDS = ["noir", "black", "dark"];

export function getPartenaires() {
  const dir = path.join(process.cwd(), "public/images/partenaires");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return EXTENSIONS.includes(ext) && !file.startsWith(".");
    })
    .map((file) => {
      const ext = path.extname(file).toLowerCase();
      const name = path.basename(file, ext).replace(/[-_]/g, " ").trim();
      const lowerFile = file.toLowerCase();
      const isDark = DARK_KEYWORDS.some((kw) => lowerFile.includes(kw));
      return {
        src: `/images/partenaires/${file}`,
        alt: name,
        filename: file,
        invert: isDark,
      };
    });
}
