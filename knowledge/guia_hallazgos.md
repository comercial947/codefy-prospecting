# Guía de hallazgos por sector

Biblioteca de hallazgos preformulados. Cada sector tiene 3+ candidatos en cada categoría (Crítico / Oportunidad / Quick Win). El agente elige según los datos del prospect y rellena los `{X}` con números reales.

**Formato obligatorio:** `dato → causa → distancia en semanas`. Cada hallazgo en 2-3 oraciones máximo. Nunca dar el "cómo".

---

## Reglas de selección

1. **Crítico**: el más impactante dado el volumen del prospect. Si el prospect tiene 1M+ visitas, prefiere checkout/mobile/atribución. Si tiene <100K, prefiere conversión PDP o discoverability.
2. **Oportunidad**: AIO/ChatGPT como canal nuevo si la cuenta es grande; retención/LTV si es mid-market o PyME.
3. **Quick Win**: el de menor fricción para insinuar — algo que el equipo del prospect podría confirmar en 5 minutos.

---

## MODA / CALZADO

### Crítico
- **Checkout mobile con fricción medible.** Con {MOBILE}% de tu tráfico en mobile y un bounce de {BOUNCE}% en checkout, hay {ESTIMATE} sesiones que llegan al carrito y no completan. La distancia desde la fricción más obvia (registro obligatorio, captura de tarjeta sin validación inline) hasta la solución es de 3-4 semanas.
- **PDP sin guía de tallas dinámica.** Las devoluciones por talla representan entre 18-25% del volumen del sector; sin guía de tallas integrada al PDP, parte de esa devolución se evita antes de la compra. Implementación típica: 2-3 semanas.
- **Búsqueda interna sin tolerancia a tipos.** Buscadores que no toleran "tennis" vs "tenis" o "addidas" pierden entre 8-12% de las búsquedas con intención. La distancia a una búsqueda decente es 2 semanas.

### Oportunidad
- **AIO / ChatGPT como canal de descubrimiento.** Las búsquedas tipo "mejor zapato para correr en pavimento" ya pasan por LLMs antes que por Google. Si tu catálogo no aparece estructurado para ser citado, ese tráfico va a marcas que sí. Ventana de posicionamiento: 6-10 semanas.
- **Programa de fidelidad sin ciclo claro.** Sectores con compra recurrente (zapato deportivo, básicos) tienen LTV 2.8× la primera compra cuando hay programa estructurado. Sin él, el segundo pedido se queda en 22%.
- **Wishlist sin push de retorno.** Productos guardados en wishlist se compran 3× más cuando hay recordatorio de bajada de precio o stock crítico. Sin esa secuencia, la wishlist es solo decoración.

### Quick Win
- **Imagen hero mobile pesada.** Tiempos de carga >2.5s en mobile correlacionan con bounce +12 puntos. Reducción típica de hero: 1 semana.
- **Filtros sin contador de resultados.** Filtros sin previsualización del número de productos filtrados generan abandono del filtro de 35-40%. Cambio: 1-2 semanas.
- **Botón "comprar" sin estado de stock visible.** Si el botón cambia a "agotado" recién después del clic, pierdes la fricción del click. Visualizar stock en grid: 1 semana.

---

## MUEBLES / HOGAR

### Crítico
- **Cero financiamiento visible en PDP.** En tickets >$3,000 MXN, ausencia de "12 meses sin intereses" o financiamiento Kueski/Aplazo en PDP correlaciona con conversión 35-45% menor que players con la opción visible. Implementación: 2-3 semanas.
- **Carrusel de PDP sin video ni 360°.** Sectores con ticket alto y compra emocional pierden conversión cuando solo hay 4-6 fotos estáticas. Players líderes muestran video corto + dimensiones AR. Distancia: 4-6 semanas para implementar bien.
- **Costo de envío revelado tarde.** Envío revelado solo en checkout (no antes) es la causa #1 de abandono en muebles. Mostrarlo en PDP con CP del usuario: 2 semanas.

### Oportunidad
- **AIO + búsquedas largas.** "Sofá para sala pequeña con perro" es una búsqueda LLM-nativa. Sin contenido estructurado por uso (no por categoría), no apareces. Ventana: 8-12 semanas.
- **Wishlist + recordatorio de bajada de precio.** Ticket alto + ciclo largo significa que la wishlist es donde se cocina la decisión. Sin secuencia de email/SMS atada, la wishlist no convierte.
- **Showroom virtual / catálogo descargable.** Catálogos PDF descargables generan leads B2B (interioristas, hoteles) que normalmente se pierden. Sector adyacente sin tocar.

### Quick Win
- **Calculadora de espacio ausente.** "¿Me cabe?" es la pregunta #1 en muebles. Calculadora de espacio inline: 1-2 semanas.
- **Sin filtro por dimensiones.** Filtros por color y precio están; filtros por ancho/alto/profundidad faltan. Implementación: 1-2 semanas.

---

## SUPLEMENTOS / SALUD

### Crítico
- **Sin programa de suscripción.** Recurrencia natural del sector (proteína, vitaminas mensuales) sin opción de suscripción deja LTV en mesa. Players con suscripción tienen LTV 4-5× la primera compra. Implementación: 4-6 semanas.
- **PDP sin diferenciación clínica.** En suplementos, la diferencia entre "creatina" y "creatina monohidratada Creapure" es la conversión. Si la ficha no la cuenta, el usuario compara en Amazon. Restructura PDP: 3 semanas.

### Oportunidad
- **AIO / búsquedas de salud.** "Mejor proteína para mujer 35 años" es búsqueda LLM. Estructura de contenido para snippets / tablas comparativas: 6-10 semanas.
- **Quiz de recomendación.** Cuestionario de objetivo + perfil que termine en bundle personalizado eleva ticket promedio 40-60%. Sin él, el usuario rebota a otro sitio.

### Quick Win
- **Sin certificaciones visibles.** Sellos COFEPRIS, NSF, Informed Sport en grid (no escondidos en footer) suben confianza visiblemente. Cambio: 1 semana.
- **Reviews sin filtro por objetivo.** Reviews mezcladas sin filtro "por objetivo similar" pierden persuasión. Filtro: 1-2 semanas.

---

## ELECTRÓNICA

### Crítico
- **Comparación entre productos ausente.** Sector donde el comportamiento es comparar — sin tabla de comparación lado-a-lado, el usuario abre Amazon. Implementación: 3-4 semanas.
- **Disponibilidad por tienda no visible.** "Lo necesito hoy" es búsqueda común; sin stock por tienda física, el venta se va a quien sí lo muestra (Best Buy, Office Depot). Distancia: 4-6 semanas.

### Oportunidad
- **Garantía extendida no upsold.** Sector con margen de 30-40% en garantías extendidas; si el flow no las ofrece en checkout, ese margen se queda fuera.
- **Trade-in / equipo viejo.** Programas de recompra de equipo viejo elevan ticket nuevo y son raros en MX. Diferencial obvio.

### Quick Win
- **Especificaciones no comparables.** Specs en bullet sin estructura impiden comparar. Estructurar specs en tabla: 1-2 semanas.

---

## BELLEZA

### Crítico
- **Quiz de tipo de piel ausente.** Belleza sin quiz pierde el 30-40% de conversión que tienen marcas con quiz integrado. Sin él, todo el sitio compite con Sephora en condiciones desiguales.
- **Reviews sin foto del usuario.** Reviews sin UGC visual convierten 60% menos. Configurar reviews con foto: 2-3 semanas.

### Oportunidad
- **AIO + búsquedas estilo "mejor X para Y".** Búsquedas LLM dominan descubrimiento en belleza. Estructura de contenido editorial: 6-10 semanas.
- **Programa de muestras.** Sin sampling, la barrera de probar producto nuevo es alta. Programa de muestras a partir de cierto ticket: 4 semanas.

### Quick Win
- **Sin tono/textura visualizables.** Selector de tono que no muestra el producto aplicado pierde conversión. Visualizador o swatches realistas: 2 semanas.

---

## REFACCIONES AUTO

### Crítico
- **Filtro por compatibilidad débil.** Filtro marca/modelo/año mal hecho es la causa #1 de abandono. Si tu buscador no descarta lo incompatible, el usuario asume que no lo tienes. Reestructura: 4-6 semanas.

### Oportunidad
- **B2B sin canal separado.** Talleres y mecánicos compran al mayoreo pero el sitio los trata como retail. Portal B2B con precios diferenciados: 6-8 semanas.

### Quick Win
- **Sin "compatible con" en PDP.** Lista de modelos compatibles ausente del PDP fuerza al usuario a verificar fuera del sitio. Lista clara: 1-2 semanas.

---

## RETAIL MASIVO

### Crítico
- **Búsqueda interna que devuelve cero.** En catálogos grandes, "no encontramos resultados" es el bug más caro. Configurar búsqueda con autocompletado y sugerencias: 4-6 semanas.
- **Categorización con >4 niveles.** Más de 4 clics para llegar al producto correlaciona con bounce +18 pts. Replanteo de IA: 6-8 semanas.

### Oportunidad
- **Personalización de homepage por usuario recurrente.** Homepage estática para todos los usuarios — recurrentes podrían ver categorías de su última compra. Setup CDP + reglas: 8-12 semanas.

### Quick Win
- **Breadcrumb roto o ausente.** Sin breadcrumb claro, navegación lateral se pierde. Implementar: 1-2 semanas.

---

## ALIMENTOS / GOURMET

### Crítico
- **Cobertura de envío no declarada antes del checkout.** Usuario llena carrito, captura CP en checkout y se entera que no llegan a su zona. Mostrar cobertura desde la home con CP: 2-3 semanas.

### Oportunidad
- **Suscripción de productos básicos.** Café, aceites, pasta — productos de recompra obvia sin opción de suscripción. Implementación: 4-6 semanas.

### Quick Win
- **Sin "te puede gustar" en PDP.** Cross-sell ausente en producto deja AOV plano. Setup: 1-2 semanas.

---

## DEPORTES

### Crítico
- **Sin segmentación por deporte.** Catálogo plano sin filtrar por disciplina dispersa la decisión. Estructurar por deporte: 4 semanas.

### Oportunidad
- **Programa para equipos / clubs.** Compra grupal sin canal dedicado pierde tickets grandes. B2B-light: 6-8 semanas.

### Quick Win
- **Talles sin tabla específica del deporte.** Talles deportivos varían por uso. Tabla por categoría: 1 semana.

---

## MASCOTAS

### Crítico
- **Sin suscripción de comida.** Comida es 70% del ticket recurrente; sin suscripción, dejas LTV en mesa. Implementación: 4-6 semanas.

### Oportunidad
- **Recordatorio de antiparasitarios.** Email/SMS estacional ausente — recompra deja de pasar simplemente porque el dueño olvida. Setup: 2-3 semanas.

### Quick Win
- **Filtro por edad/peso de mascota ausente.** Comida y juguetes varían por edad. Filtro: 1 semana.

---

## JUGUETES / COLECCIONABLES

### Crítico
- **PDP sin "edad recomendada" visible.** Búsqueda principal es por edad del niño. Sin filtro y badge claro, el regalador no sabe qué llevar. Implementación: 2-3 semanas.

### Oportunidad
- **Wishlist compartible.** En coleccionables, lista de deseos compartible con familia es revenue puro. Setup: 4 semanas.

### Quick Win
- **Sin envoltura para regalo opt-in.** Casi todo es regalo en este sector; sin opción visible, fricción innecesaria. Toggle en checkout: 1 semana.

---

## LIBRERÍA

### Crítico
- **Recomendaciones genéricas / no personalizadas.** "Más vendidos" es lo único que la mayoría muestra. Players líderes (Gandhi, Porrúa) tienen "porque leíste X". Setup: 6-8 semanas.

### Oportunidad
- **Listas curadas por autor / tema.** Discoverability editorial es la palanca grande en libros. Sin listas, el usuario solo encuentra lo que ya buscaba.

### Quick Win
- **Sin preview del libro.** Primer capítulo descargable o vista previa eleva conversión. Implementación: 2 semanas.

---

## HOME IMPROVEMENT

### Crítico
- **Calculadora de cantidades ausente.** "¿Cuántas cajas de loseta para 12 m²?" — sin calculadora, el usuario abandona o compra mal. Implementación: 3 semanas.

### Oportunidad
- **Sección "guías de instalación".** Contenido de instalación atrae búsqueda informacional + reduce devoluciones. Setup: 6-8 semanas.

### Quick Win
- **Sin disponibilidad por tienda física.** En este sector, "lo recojo hoy" es decisor. Mostrar stock por tienda: 2-3 semanas.

---

## Hallazgos universales (cualquier sector)

### Crítico cross-sector
- **Sin cookies banner GDPR/LFPDPPP compliant.** Multas y bloqueo de tracking. Solución: 1-2 semanas.
- **Performance mobile crítica.** Si LCP >4s mobile, todo lo demás importa menos. Optimización: 2-4 semanas.

### Oportunidad cross-sector
- **AIO / ChatGPT como canal.** Aplica a todos los sectores con búsqueda informacional. Estructurar contenido para LLMs: 6-12 semanas.

### Quick Win cross-sector
- **Email de carrito abandonado ausente.** Sin secuencia de 3 emails post-abandono, dejas 8-12% de la conversión en mesa. Setup: 1-2 semanas.
