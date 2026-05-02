#!/usr/bin/env node
/**
 * html-to-pdf.mjs
 *
 * Convierte un archivo HTML local a PDF ejecutivo de 2 páginas A4.
 * Uso: node scripts/html-to-pdf.mjs output/marca.html [output/marca.pdf]
 *
 * Si no se pasa el segundo argumento, el PDF se guarda con el mismo nombre
 * base junto al HTML.
 */

import { chromium } from 'playwright';
import { existsSync } from 'node:fs';
import { resolve, dirname, basename, extname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

function printHelp() {
  console.log(`
Codefy HTML → PDF bridge

Uso:
  node scripts/html-to-pdf.mjs <input.html> [output.pdf]

Ejemplos:
  node scripts/html-to-pdf.mjs output/nike-mx.html
  node scripts/html-to-pdf.mjs output/bandai.html output/bandai-final.pdf

Opciones:
  --help       Muestra esta ayuda
  --no-bg      No imprimir colores/imágenes de fondo
`);
}

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(args.length === 0 ? 1 : 0);
}

const printBackground = !args.includes('--no-bg');
const positional = args.filter(a => !a.startsWith('--'));
const inputArg = positional[0];
const outputArg = positional[1];

const inputPath = resolve(process.cwd(), inputArg);

if (!existsSync(inputPath)) {
  console.error(`✗ No existe el archivo: ${inputPath}`);
  process.exit(1);
}

if (extname(inputPath).toLowerCase() !== '.html') {
  console.error(`✗ El archivo debe ser .html (recibí: ${extname(inputPath)})`);
  process.exit(1);
}

const outputPath = outputArg
  ? resolve(process.cwd(), outputArg)
  : join(dirname(inputPath), basename(inputPath, '.html') + '.pdf');

console.log(`→ Leyendo:    ${inputPath}`);
console.log(`→ Generando:  ${outputPath}`);

const browser = await chromium.launch();
try {
  const context = await browser.newContext({
    // Forzar tamaño coherente con A4 para que el preview sea fiel
    viewport: { width: 1240, height: 1754 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Cargar como file:// para que funcionen rutas relativas y fuentes locales
  await page.goto(pathToFileURL(inputPath).href, {
    waitUntil: 'networkidle',
    timeout: 30_000,
  });

  // Esperar a que las web fonts (Inter) se carguen antes de imprimir
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });

  await page.emulateMedia({ media: 'print' });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground,
    preferCSSPageSize: true,
    margin: {
      top: '14mm',
      right: '14mm',
      bottom: '14mm',
      left: '14mm',
    },
  });

  console.log(`✓ PDF generado: ${outputPath}`);
} catch (err) {
  console.error('✗ Error generando PDF:', err.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
