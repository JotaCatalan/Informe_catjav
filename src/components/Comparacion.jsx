const markdownSource = `# Tabla Comparativa de Marcos Regulatorios por Industria — Caso WannaCry (NHS, 2017)

## Contexto

El caso **WannaCry–NHS (2017)** evidenció fallas en **gestión de vulnerabilidades, continuidad operacional y resiliencia cibernética** dentro de infraestructura crítica sanitaria.

Para analizar qué controles y marcos regulatorios podrían haber mitigado o reducido el impacto del ataque, se comparan distintos estándares y regulaciones relevantes para sectores críticos.

---

## Tabla Comparativa de Marcos Regulatorios por Industria

| Marco / Norma | Industria Principal | Eje 1 — Gestión de Riesgos | Eje 2 — Protección Técnica | Eje 3 — Respuesta y Continuidad Operacional | Aplicabilidad al Caso NHS–WannaCry |
|---------------|---------------------|----------------------------|----------------------------|---------------------------------------------|------------------------------------|
| **ISO/IEC 27001:2022** | Multisectorial (Gobierno, Salud, Finanzas, TI, Energía) | Implementa **ISMS (Information Security Management System)** basado en identificación, evaluación y tratamiento de riesgos. | Controles sobre acceso, criptografía, hardening, seguridad de redes, gestión de vulnerabilidades y activos. | Requiere planificación de incidentes, continuidad del negocio, recuperación y mejora continua. | **Muy Alta.** Una correcta aplicación habría fortalecido gestión de parches, inventario de activos y respuesta ante incidentes en el NHS. |
| **CIS Controls v8** | Multisectorial / Operacional | Priorización de riesgos mediante controles prescriptivos enfocados en amenazas reales. | Incluye inventario de activos, gestión de vulnerabilidades, protección malware, control de privilegios y monitoreo continuo. | Contempla backup, recuperación, logging, detección y capacidades defensivas activas. | **Muy Alta.** Los controles de patch management, asset inventory y malware defense podrían haber reducido significativamente la propagación de WannaCry. |
| **NIS / NIS2 (UE)** | Infraestructura crítica y operadores esenciales | Gestión obligatoria de riesgo cibernético para operadores de servicios esenciales. | Exige medidas técnicas y organizacionales de ciberseguridad. | Obliga reporte de incidentes, resiliencia y coordinación nacional/europea. | **Alta.** El NHS, como infraestructura sanitaria esencial, encaja plenamente dentro del enfoque de resiliencia y notificación de incidentes. |
| **HIPAA Security Rule** | Salud (Healthcare — EE.UU.) | Gestión de riesgos sobre información médica protegida (ePHI). | Salvaguardas administrativas, físicas y técnicas para proteger sistemas clínicos. | Exige procedimientos de contingencia, backup y recuperación de emergencias. | **Media–Alta.** Aunque estadounidense, aporta controles relevantes para sistemas hospitalarios y protección de registros clínicos. |
| **NIST Cybersecurity Framework (CSF 2.0)** | Multisectorial / Infraestructura crítica | Basado en funciones: **Govern, Identify, Protect, Detect, Respond, Recover**. | Incluye control de acceso, vulnerabilidades, monitoreo y arquitectura segura. | Gran énfasis en recuperación, respuesta coordinada y resiliencia organizacional. | **Muy Alta.** Proporciona uno de los enfoques más sólidos para enfrentar ataques ransomware de escala masiva. |

---

## Comparación Focalizada: ISO 27001:2022 vs CIS Controls vs NIS/NIS2

| Eje Comparativo | ISO/IEC 27001:2022 | CIS Controls v8 | NIS / NIS2 |
|------------------|-------------------|------------------|-------------|
| **Enfoque principal** | Gestión organizacional de seguridad | Controles técnicos priorizados | Resiliencia regulatoria e infraestructura crítica |
| **Orientación** | Estratégica + operacional | Técnica + operacional | Legal + estratégica |
| **Gestión de vulnerabilidades** | Obligatoria mediante tratamiento de riesgos | Control prioritario explícito | Exigencia regulatoria para operadores esenciales |
| **Protección contra ransomware** | Alta | Muy Alta | Alta |
| **Adecuación al NHS–WannaCry** | Muy Alta | Muy Alta | Alta |

---

## Relación directa con Fallas Observadas en WannaCry

| Falla observada en NHS (2017) | ISO 27001:2022 | CIS Controls | NIS / NIS2 |
|-------------------------------|----------------|---------------|-------------|
| Sistemas Windows sin actualizar | Gestión de vulnerabilidades y control de cambios | **CIS Control 07 — Continuous Vulnerability Management** | Medidas obligatorias de reducción de riesgo |
| Inventario deficiente de activos TI | Gestión de activos | **CIS Control 01 — Inventory and Control of Enterprise Assets** | Gobierno y supervisión de infraestructura esencial |
| Propagación lateral del malware | Seguridad de red, segmentación y privilegios | Protección malware y control de accesos | Resiliencia operacional |
| Interrupción hospitalaria masiva | Continuidad del negocio y recuperación | Backup y recovery controls | Gestión de incidentes críticos |
| Coordinación limitada ante incidente | Incident Response Planning | Logging, monitoring y response procedures | Notificación y coordinación obligatoria |

---

## Análisis Técnico del Caso bajo los Marcos Comparados

Desde una perspectiva regulatoria, el caso **WannaCry–NHS** demuestra que el incidente no fue exclusivamente un problema de malware, sino también de **madurez de gobernanza de ciberseguridad**.

**ISO/IEC 27001:2022** habría proporcionado una estructura formal de gestión del riesgo, inventario de activos, tratamiento de vulnerabilidades y continuidad operacional.

**CIS Controls v8** probablemente habría tenido el mayor impacto preventivo inmediato, especialmente mediante:

- inventario de activos;
- aplicación de parches;
- gestión de vulnerabilidades;
- protección contra malware;
- control de privilegios administrativos.

Por su parte, **NIS/NIS2** introduce una capa adicional de responsabilidad regulatoria para operadores esenciales como sistemas sanitarios nacionales, reforzando resiliencia, coordinación y reporte obligatorio de incidentes.

---

## Conclusión

El análisis comparativo evidencia que el caso **NHS–WannaCry (2017)** podría haberse mitigado significativamente mediante la aplicación coordinada de marcos regulatorios modernos.

La combinación de:

- **ISO/IEC 27001:2022** → gobernanza y gestión de riesgos;
- **CIS Controls v8** → controles técnicos priorizados;
- **NIS/NIS2** → resiliencia regulatoria e infraestructura crítica;

constituye un enfoque robusto para reducir la probabilidad, impacto y propagación de ataques ransomware en entornos sanitarios de alta criticidad.
`

function parseMarkdown(text) {
  const lines = text.split('\n')
  const nodes = []
  let paragraphLines = []
  let tableLines = []

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      nodes.push({ type: 'paragraph', content: paragraphLines.join(' ') })
      paragraphLines = []
    }
  }

  const flushTable = () => {
    if (tableLines.length === 0) return

    const rows = tableLines.map((rawLine) =>
      rawLine
        .trim()
        .replace(/^\||\|$/g, '')
        .split('|')
        .map((cell) => cell.trim())
    )

    const [header, separator, ...bodyRows] = rows
    if (separator && separator.every((cell) => /^:?-+:?$/.test(cell))) {
      nodes.push({ type: 'table', header, rows: bodyRows })
    } else {
      header.forEach((cell) => paragraphLines.push(cell))
    }

    tableLines = []
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (line === '' || /^---+$/.test(line)) {
      flushTable()
      flushParagraph()
      continue
    }

    if (line.startsWith('#')) {
      flushTable()
      flushParagraph()
      const level = line.match(/^#+/)?.[0]?.length || 1
      const content = line.replace(/^#+\s*/, '')
      nodes.push({ type: 'heading', level, content })
      continue
    }

    if (line.startsWith('|')) {
      tableLines.push(rawLine)
      continue
    }

    if (tableLines.length > 0) {
      flushTable()
    }

    paragraphLines.push(line)
  }

  flushTable()
  flushParagraph()
  return nodes
}

function renderCellContent(content) {
  return content.split(/<br\s*\/?/i).map((segment, index, arr) => (
    <span key={index}>
      {segment.trim()}
      {index < arr.length - 1 ? <br /> : null}
    </span>
  ))
}

function Comparacion() {
  const nodes = parseMarkdown(markdownSource)

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg shadow-slate-200/40">
        <div className="bg-gradient-to-r from-slate-950 via-cyan-700 to-slate-900 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Comparación</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Marco Regulatorio</h2>
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10">
          {nodes.map((node, index) => {
            if (node.type === 'heading') {
              const HeadingTag = `h${Math.min(node.level, 3)}`
              return (
                <HeadingTag key={index} className="text-2xl font-semibold text-slate-900 tracking-tight sm:text-3xl">
                  {node.content}
                </HeadingTag>
              )
            }

            if (node.type === 'table') {
              return (
                <div key={index} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                      <thead className="bg-slate-100 text-slate-900">
                        <tr>
                          {node.header.map((cell, cellIndex) => (
                            <th
                              key={cellIndex}
                              className="whitespace-nowrap border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.08em] text-slate-700"
                            >
                              {renderCellContent(cell)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {node.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="align-top border-b border-slate-200 px-4 py-4 text-slate-700">
                                {renderCellContent(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            }

            return (
              <p key={index} className="text-slate-700 leading-8">
                {node.content}
              </p>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Comparacion
