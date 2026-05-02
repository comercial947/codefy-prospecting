# Codefy Prospecting Agent

Agente autónomo de prospección B2B para Codefy. Toma datos de un prospect (URL + Similarweb + Wappalyzer) y entrega:

- PDF ejecutivo de 2 páginas
- Mensaje de primer toque adaptado al canal
- Fila lista para pegar en CRM Mewtwo

Operado vía Claude Code en terminal. El system prompt vive en `CLAUDE.md`.

---

## Setup

```bash
# 1. Instalar dependencias Node
npm install

# 2. Instalar navegador para Playwright (solo una vez)
npx playwright install chromium

# 3. Verificar que todo funciona
node scripts/html-to-pdf.mjs --help
```

Requisitos: Node 20+, Claude Code CLI instalado (`npm install -g @anthropic-ai/claude-code`).

---

## Uso

### Modo conversacional (recomendado)

```bash
cd codefy-prospecting
claude
```

Claude Code lee `CLAUDE.md` automáticamente. Le pasas el paquete de input (ver formato en CLAUDE.md sección 2) y entrega el flujo completo.

### Generar PDF manualmente

Si ya tienes el HTML llenado:

```bash
node scripts/html-to-pdf.mjs output/nike-mx.html
# → genera output/nike-mx.pdf
```

---

## Estructura

```
.
├── CLAUDE.md                    # System prompt (leído por Claude Code)
├── README.md                    # Este archivo
├── package.json
├── knowledge/
│   ├── benchmarks_conversion.md # Tickets/conversiones por sector
│   └── guia_hallazgos.md        # Biblioteca de hallazgos
├── templates/
│   ├── analysis.html            # Plantilla madre PDF
│   └── migration.html           # Variante migración
├── scripts/
│   └── html-to-pdf.mjs          # Bridge Playwright
└── output/                      # HTMLs intermedios + PDFs finales
```

---

## Flujo típico

1. Le pasas a Claude el paquete de input del prospect.
2. Claude clasifica sector, normaliza datos, selecciona 3 hallazgos.
3. Llena `templates/analysis.html` con los datos y guarda en `output/<marca>.html`.
4. Corre el bridge para generar `output/<marca>.pdf`.
5. Entrega: PDF + resumen 3 líneas + mensaje + fila CRM.

---

## Pendientes (siguientes iteraciones)

- [ ] Dispatcher de canales (LinkedIn/email/WhatsApp) — auto-envío
- [ ] Integración con Mewtwo (insertar fila vía API)
- [ ] Cache de análisis previos para T2/T3
- [ ] Validador automático de placeholders en HTML antes de exportar
