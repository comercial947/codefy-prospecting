# Benchmarks de conversión por sector — eCommerce México

Referencias para estimar upside cuando faltan datos del prospect. Fuentes: agregado de reportes públicos (Statista MX, Similarweb sector reports, Baymard, Klaviyo benchmarks 2024–2025) cruzados con observación interna Codefy. **Son rangos, no verdades absolutas.** Cuando uses uno, decláralo en el resumen al usuario.

---

## Cómo usar esta tabla

1. Identifica el sector del prospect.
2. Toma la conversión MEDIA como punto de partida.
3. Ajusta por stack (ver Paso 3 del CLAUDE.md):
   - Stack obsoleto → conversión BAJA del rango
   - Stack medio → MEDIA
   - Stack avanzado → ALTA
4. Calcula upside con mejora CRO declarada (default +0.5 pts).

---

## Tabla maestra

| Sector | Conv. baja | Conv. media | Conv. alta | Ticket prom. (MXN) | Mobile esperado | Bounce esperado |
|---|---|---|---|---|---|---|
| Moda / calzado | 0.8% | 1.6% | 2.8% | $850 | 75–82% | 38–48% |
| Muebles / hogar | 0.4% | 0.9% | 1.6% | $4,200 | 55–65% | 42–52% |
| Suplementos / salud | 1.5% | 2.4% | 3.8% | $720 | 70–78% | 35–45% |
| Electrónica | 0.6% | 1.1% | 2.0% | $3,800 | 65–75% | 40–50% |
| Belleza | 1.4% | 2.5% | 4.0% | $580 | 78–86% | 32–42% |
| Refacciones auto | 0.7% | 1.3% | 2.2% | $1,400 | 60–70% | 45–55% |
| Retail masivo | 0.9% | 1.8% | 3.2% | $920 | 72–80% | 38–48% |
| Alimentos / gourmet | 1.2% | 2.1% | 3.4% | $680 | 70–78% | 35–45% |
| Deportes | 1.0% | 1.8% | 2.9% | $1,150 | 70–78% | 38–48% |
| Mascotas | 1.6% | 2.7% | 4.2% | $620 | 72–80% | 32–42% |
| Juguetes / coleccionables | 0.8% | 1.4% | 2.4% | $980 | 68–76% | 40–50% |
| Librería | 0.9% | 1.6% | 2.6% | $480 | 65–73% | 42–52% |
| Home improvement | 0.5% | 1.0% | 1.8% | $2,800 | 58–68% | 45–55% |

---

## Notas por sector

### Moda / calzado
Mobile dominante. Devoluciones altas tiran conversión observada. Los players con experiencia mobile pulida (PhotoBoothMe, Dafiti) llegan a 2.5%+. Marcas con sitio pesado o sin guía de tallas clara se quedan en 1%.

### Muebles / hogar
Ticket alto, ciclo largo, conversión baja por naturaleza. La métrica que importa es **add-to-cart → checkout**, no visita → compra. Wishlist y financiamiento son palancas grandes. Mobile más bajo que otros sectores.

### Suplementos / salud
Recurrencia alta — el LTV es 3–5× la primera compra. Si el prospect no tiene programa de suscripción o quiz de recomendación, ese es el hallazgo de oportunidad obvio.

### Electrónica
Comparación de precios es el comportamiento dominante. La diferencia entre conversión baja y alta suele ser disponibilidad de financiamiento, garantía visible y stock claro. Ticket alto compensa conversión baja.

### Belleza
Sector más maduro en CRO. Quizzes, muestras, programa de puntos son baseline. Si el prospect no los tiene, hay hallazgo crítico. AIO/ChatGPT impacta fuerte aquí (búsquedas tipo "mejor sérum para piel mixta").

### Refacciones auto
Búsqueda por compatibilidad es el cuello de botella. Filtro por marca/modelo/año mal hecho mata conversión. Mobile más bajo (compra desde desktop con la lista).

### Retail masivo
Los grandes (Liverpool, Coppel, Walmart, Soriana, HEB) tienen rangos similares. Lo que mueve la aguja es categorización, búsqueda interna y velocidad. Ticket varía enormemente por mix de categorías.

### Alimentos / gourmet
Recurrencia y geografía importan. Si solo entregan en CDMX y el sitio no lo declara antes del checkout, hay fricción crítica. Suscripción es palanca grande.

### Deportes
Estacional. Q1 (propósitos de año nuevo) y Q3 (regreso a clases) son picos. Si el prospect no segmenta campañas por estacionalidad, hay oportunidad.

### Mascotas
Sector con mayor recurrencia documentada. Suscripción de comida + recordatorios de antiparasitarios son baseline en marcas maduras. Si no los tienen, oportunidad crítica.

### Juguetes / coleccionables
Picos brutales en Q4 (Buen Fin, Navidad, Día del Niño). Conversión fuera de temporada cae a la mitad. Importa medir conversión SOLO en periodo comparable.

### Librería
Margen bajo, ticket bajo, recurrencia media. Lo que mueve es discoverability (recomendaciones, listas curadas) y envío gratis sobre umbral.

### Home improvement
Ticket alto, comportamiento research-heavy. Calculadoras de cantidades, guías de instalación y disponibilidad por tienda física son palancas.

---

## Calibración de upside por tamaño de cuenta

| Tamaño | Visitas/mes | Rango upside aceptable |
|---|---|---|
| PyME / tienda chica | <100K | +40% a +60% |
| Mid-market | 100K–1M | +25% a +40% |
| Grande | 1M–5M | +20% a +30% |
| Top retailer | >5M | +15% a +25% |

**Nunca proyectar más de +60%.** Si los cálculos lo dan, recalibra el supuesto de mejora CRO hacia abajo.

---

## Señales de stack para clasificar conversión

**Conversión BAJA del rango:**
- WordPress + WooCommerce versiones <5.x
- Magento 1 (EOL desde 2020)
- Prestashop sin actualizaciones
- Custom PHP/Python sin framework moderno
- Sitios con tiempo de carga >4s en mobile

**Conversión MEDIA:**
- Shopify estándar
- VTEX
- Magento 2 actualizado
- WooCommerce moderno bien mantenido
- Tiendanube (rangos OK para PyME)

**Conversión ALTA:**
- Shopify Plus
- Hydrogen / headless con Next.js
- Salesforce Commerce Cloud
- BigCommerce con frontend custom
- CDP activo (Segment, mParticle, Tealium) + personalización (Insider, Dynamic Yield, VWO)

---

## Última revisión: mayo 2026

Si encuentras datos públicos más recientes que contradigan estos rangos, prevalece el dato más nuevo. Documenta el cambio.
