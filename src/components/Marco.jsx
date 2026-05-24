import { Scale } from 'lucide-react'

const markdownSource = `## Tabla Comparativa — Marco Jurídico Aplicable al Caso NHS–WannaCry (2017)

| Ley / Regulación | Jurisdicción | Artículos aplicables al caso | Aplicación específica en NHS–WannaCry (2017) | Efectividad estimada | Observaciones |
|------------------|--------------|------------------------------|-----------------------------------------------|----------------------|----------------|
| **Ley 19.223 sobre Delitos Informáticos** | Chile | **Art. 1:** destrucción o inutilización de sistemas. <br> **Art. 3:** alteración, daño o destrucción de datos. | El ransomware WannaCry inutilizó computadores hospitalarios, bloqueó acceso a historias clínicas y afectó sistemas médicos del NHS. Podría configurarse como **sabotaje informático** y daño de datos. | **Media – Baja** | La Ley 19.223 fue diseñada para amenazas informáticas previas a malware moderno, ransomware automatizado y ataques transnacionales. Carecía de tipificaciones específicas sobre herramientas de intrusión, malware avanzado y propagación automática. |
| **Ley 21.459 sobre Delitos Informáticos** | Chile | **Art. 1:** ataque a la integridad del sistema. <br> **Art. 2:** acceso ilícito. <br> **Art. 4:** ataque a la integridad de datos. <br> **Art. 8:** abuso de dispositivos. | WannaCry explotó vulnerabilidades SMB (EternalBlue), realizó acceso no autorizado, cifró archivos hospitalarios, interrumpió sistemas clínicos y utilizó malware especializado para propagación masiva. | **Alta** | Es probablemente uno de los marcos chilenos más adecuados para analizar WannaCry. Su alineación con el Convenio de Budapest permite abordar ransomware, exploits y malware moderno con mayor precisión jurídica. |
| **Directiva (UE) 2024/1385 — Cyber Solidarity Act** | Unión Europea | **Capítulos sobre:** <br> • Detección temprana. <br> • Coordinación de incidentes de gran escala. <br> • Cybersecurity Emergency Mechanism. <br> • Cybersecurity Reserve. | Aunque posterior al ataque, un evento equivalente a WannaCry activaría cooperación europea, inteligencia compartida, equipos de respuesta rápida y apoyo operacional para infraestructura crítica sanitaria. | **Alta (preventiva / reactiva)** | No tipifica delitos penales directamente. Su fortaleza radica en **respuesta coordinada, resiliencia y cooperación multinacional**, aspectos cruciales en ataques tipo ransomware global. No aplicable retroactivamente a 2017. |
| **Computer Misuse Act 1990 (Reino Unido) — versión vigente en 2017** | Reino Unido | **Section 1:** Unauthorised Access. <br> **Section 2:** Access with intent to commit further offences. <br> **Section 3:** Unauthorised acts impairing operation of computers. <br> **Section 3A:** Making / supplying hacking tools. <br> **Section 3ZA:** Serious Damage Offences. | WannaCry encaja directamente como acceso no autorizado, afectación deliberada de sistemas hospitalarios, uso de malware y generación de daños graves a infraestructura crítica sanitaria. | **Alta** | Era el principal marco legal aplicable en el Reino Unido durante el incidente. La inclusión de **Section 3ZA** resulta particularmente relevante por el impacto potencial sobre salud pública y servicios esenciales. |
| **Marco legislativo del Reino Unido sobre ciberdelitos (panorama 2026)** | Reino Unido | **Computer Misuse Act 1990 actualizado como base normativa.** <br> Complementado por: <br> • National Cyber Strategy. <br> • políticas NCSC. <br> • marcos de protección de infraestructura crítica. | Un “nuevo WannaCry” sería tratado bajo criterios ampliados de resiliencia nacional, protección sanitaria crítica, respuesta coordinada Estado-industria y cooperación internacional contra ransomware avanzado. | **Muy Alta** | El enfoque 2026 combina persecución penal con **gestión estratégica de riesgo**, ciberdefensa, inteligencia y protección de servicios esenciales. Presenta mayor madurez institucional frente a amenazas complejas. |

---

### Comparación General de Efectividad frente al Caso NHS–WannaCry

| Marco Jurídico | Capacidad Penal | Capacidad Preventiva | Manejo de Infraestructura Crítica | Adaptación a Ransomware Moderno |
|----------------|-----------------|----------------------|-----------------------------------|---------------------------------|
| Ley 19.223 (Chile) | Media | Baja | Baja | Baja |
| Ley 21.459 (Chile) | Alta | Media | Media–Alta | Alta |
| Directiva UE 2024/1385 | Baja (penal) | Muy Alta | Muy Alta | Alta |
| Reino Unido — CMA 2017 | Alta | Media | Alta | Alta |
| Reino Unido — Marco 2026 | Muy Alta | Muy Alta | Muy Alta | Muy Alta |

### Conclusión Técnica–Jurídica

El caso **NHS–WannaCry (2017)** demuestra la evolución del derecho penal informático frente a amenazas de ransomware global. Mientras la **Ley 19.223 chilena** habría permitido una persecución parcial basada en sabotaje y daño informático, la **Ley 21.459** ofrece una cobertura significativamente más completa mediante figuras como acceso ilícito, ataque a sistemas, ataque a datos y abuso de dispositivos.

En el ámbito internacional, el **Computer Misuse Act del Reino Unido** ya poseía herramientas robustas para abordar este tipo de incidentes en 2017, especialmente respecto a acceso no autorizado y afectación grave de sistemas críticos. Finalmente, la **Directiva (UE) 2024/1385** y el **marco británico 2026** muestran una evolución hacia modelos centrados en resiliencia operativa, coordinación multinacional y protección de infraestructura esencial.
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
        .replace(/^(\||\s*)/, '')
        .replace(/(\||\s*)$/, '')
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

  const normalizeLine = (line) => line.trim()

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index]
    const line = normalizeLine(rawLine)

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
  return content.split(/<br\s*\/?>/i).map((segment, index, arr) => (
    <span key={index}>
      {segment.trim()}
      {index < arr.length - 1 ? <br /> : null}
    </span>
  ))
}

function Marco() {
  const nodes = parseMarkdown(markdownSource)

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950/95 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.8)]">
        <div className="bg-gradient-to-r from-slate-900 via-cyan-700 to-slate-950 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-cyan-300 shadow-lg shadow-cyan-500/20">
                <Scale className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Marco Jurídico</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">02. Marco</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-white px-6 py-8 sm:px-8 sm:py-10">
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
                <div key={index} className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                      <thead className="bg-slate-100 text-slate-900">
                        <tr>
                          {node.header.map((cell, cellIndex) => (
                            <th key={cellIndex} className="whitespace-nowrap border-b border-slate-200 px-4 py-3 font-semibold uppercase tracking-[0.06em] text-slate-700">
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

export default Marco
