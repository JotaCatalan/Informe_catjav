import { FileText } from 'lucide-react'

const markdownSource = `# Resumen General del Informe — Caso WannaCry (2017)

## Marco General del Caso WannaCry

El caso **WannaCry (2017)** corresponde a uno de los incidentes de ciberseguridad más relevantes y destructivos registrados a nivel mundial. El ataque utilizó un malware de tipo **ransomware con capacidades worm**, capaz de propagarse automáticamente entre sistemas Windows vulnerables mediante la explotación de la vulnerabilidad **SMB EternalBlue (MS17-010)**. Su impacto alcanzó aproximadamente **230.000 dispositivos distribuidos en más de 150 países**, afectando organizaciones gubernamentales, empresas privadas y particularmente infraestructura crítica sanitaria como el **National Health Service (NHS) del Reino Unido**. El incidente evidenció cómo un ataque informático puede trascender la esfera tecnológica y transformarse en una amenaza para la continuidad operacional, la seguridad pública y la prestación de servicios esenciales.

Desde una perspectiva jurídica y técnica, el caso permitió analizar la interacción entre **delitos informáticos, protección de datos personales, marcos regulatorios de ciberseguridad y responsabilidad institucional**, convirtiéndose en un ejemplo representativo de los desafíos modernos asociados al ransomware y a los ataques transnacionales.

---

## La Gravedad de los Delitos Identificados

La gravedad del caso WannaCry radica no solamente en la magnitud global del incidente, sino también en la naturaleza de las conductas ejecutadas por los atacantes. El ataque implicó **acceso ilícito a sistemas**, explotación de vulnerabilidades, instalación de malware especializado, cifrado masivo de archivos, interrupción operacional y extorsión económica mediante solicitudes de pago en criptomonedas. Bajo el marco chileno de la **Ley 21.459 sobre Delitos Informáticos**, estos hechos pueden vincularse con múltiples figuras penales, incluyendo **ataque a la integridad del sistema informático, acceso ilícito, ataque a la integridad de los datos y abuso de dispositivos**.

La afectación al **NHS británico** incrementa considerablemente la gravedad jurídica y social del incidente debido a su condición de **infraestructura crítica sanitaria**. La cancelación de miles de citas médicas, la indisponibilidad de sistemas clínicos y la interrupción de servicios hospitalarios demuestran que los ciberdelitos pueden generar consecuencias equivalentes a crisis operacionales de gran escala, afectando directamente a pacientes, instituciones y servicios esenciales para la población.

---

## Desarrollo de las Comparaciones Normativas y Regulatorias

El informe desarrolló múltiples comparaciones jurídicas y regulatorias con el propósito de evaluar cómo distintos marcos legales y estándares internacionales habrían abordado un incidente equivalente a WannaCry. Desde el ámbito penal se compararon normas como la **Ley 19.223 de Chile**, la **Ley 21.459**, el **Computer Misuse Act del Reino Unido**, la **Directiva (UE) 2024/1385** y el panorama regulatorio británico contemporáneo. Este análisis permitió identificar diferencias significativas en materia de persecución penal, tratamiento de ransomware, protección de infraestructura crítica y capacidades institucionales frente a amenazas cibernéticas complejas.

Paralelamente, se realizó una comparación de **marcos regulatorios y estándares de seguridad por industria**, incorporando referencias como **ISO/IEC 27001:2022**, **CIS Controls**, **NIS/NIS2**, **HIPAA Security Rule** y **NIST Cybersecurity Framework**. Estas comparaciones permitieron demostrar que una adecuada gestión de vulnerabilidades, continuidad operacional, gobierno de seguridad y protección de activos tecnológicos podría haber reducido significativamente el alcance del incidente. El análisis comparativo evidenció que la ciberseguridad moderna requiere una combinación equilibrada entre controles técnicos, gobernanza organizacional y regulación especializada.

---

## Responsables Potenciales del Ataque

Aunque la atribución definitiva del ataque WannaCry continúa siendo materia de discusión internacional, diversas investigaciones de inteligencia y organismos gubernamentales han vinculado el incidente al **grupo Lazarus Group**, organización criminal presuntamente asociada a Corea del Norte. No obstante, desde una perspectiva jurídica resulta relevante distinguir entre diferentes niveles de responsabilidad potencial: autores materiales, desarrolladores del malware, distribuidores de herramientas ofensivas, facilitadores técnicos y operadores de infraestructura ilícita.

El análisis realizado bajo la **Ley 21.459 chilena** permitió establecer posibles responsabilidades penales asociadas a conductas como acceso ilícito, ataque a sistemas, daño a datos y abuso de dispositivos. Asimismo, se exploraron posibles responsabilidades civiles derivadas de daños económicos y operacionales, además de eventuales responsabilidades administrativas vinculadas al cumplimiento normativo, gestión de riesgos y deberes de protección en organizaciones que administran información sensible o infraestructura crítica.

---

## Motivos y Finalidad del Robo o Compromiso de Datos

Aunque WannaCry fue identificado principalmente como un **ataque ransomware orientado a extorsión económica**, el análisis del tratamiento de datos demostró que el incidente también posee una dimensión relevante de **protección de datos personales y datos sensibles**. El objetivo principal del malware consistía en bloquear el acceso a la información mediante cifrado y exigir pagos en **Bitcoin** a cambio de la recuperación de los sistemas afectados. Por ello, la finalidad inmediata del ataque estaba relacionada con el beneficio económico ilícito obtenido a través de la indisponibilidad tecnológica.

Sin embargo, en entornos como el **NHS**, la información afectada incluía potencialmente **datos personales y datos sensibles de salud**, tales como historiales clínicos, diagnósticos, tratamientos y registros médicos. Esto permitió incorporar al análisis la **Ley 19.628 sobre Protección de la Vida Privada en Chile**, abordando conceptos como tipos de datos, tratamiento de datos sensibles y derechos ARCO. En consecuencia, el caso demuestra que los ataques ransomware modernos no sólo buscan obtener dinero mediante extorsión digital, sino que también comprometen activos informacionales altamente sensibles cuyo valor operativo, institucional y humano resulta extremadamente elevado.
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
    if (tableLines.length > 0) {
      const rows = tableLines.map((line) =>
        line
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
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (line === '') {
      flushTable()
      flushParagraph()
      continue
    }

    if (line === '---') {
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

function Resumen() {
  const nodes = parseMarkdown(markdownSource)

  return (
    <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950/95 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.7)]">
        <div className="bg-gradient-to-r from-cyan-500 via-slate-900 to-slate-950 px-6 py-7 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-white">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Resumen</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">01. Resumen</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white px-6 py-8 sm:px-8 sm:py-10">
          {nodes.map((node, index) => {
            if (node.type === 'heading') {
              const HeadingTag = `h${Math.min(node.level, 3)}`
              return (
                <HeadingTag
                  key={index}
                  className="text-2xl font-semibold text-slate-900 tracking-tight sm:text-3xl"
                >
                  {node.content}
                </HeadingTag>
              )
            }

            if (node.type === 'table') {
              return (
                <div key={index} className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                  <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        {node.header.map((cell, cellIndex) => (
                          <th key={cellIndex} className="border-b border-slate-200 px-4 py-3 font-medium">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {node.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border-b border-slate-200 px-4 py-3">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Resumen
