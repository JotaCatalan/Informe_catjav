import { Gavel } from 'lucide-react'

const markdownSource = `# Responsabilidades Penales, Civiles y Administrativas en el Caso WannaCry (2017) bajo la Ley 21.459 de Chile

## Introducción

El ataque **WannaCry (2017)** constituye uno de los casos de ransomware más relevantes de la historia moderna, afectando aproximadamente **230.000 equipos en más de 150 países**, incluyendo infraestructura crítica sanitaria como el **National Health Service (NHS) del Reino Unido**.

Aunque múltiples investigaciones internacionales han vinculado el ataque al grupo **Lazarus Group**, presuntamente asociado a Corea del Norte, la atribución técnica y jurídica completa sigue siendo objeto de debate internacional. Desde la perspectiva del derecho chileno, y específicamente bajo la **Ley 21.459 sobre Delitos Informáticos**, es posible analizar las responsabilidades potenciales de los distintos actores que podrían haber intervenido en la ejecución, facilitación o administración del ataque.

---

# 1. Responsabilidad Penal de los Posibles Autores Materiales

## Operadores directos del ransomware

Los operadores directos corresponden a quienes habrían:

- desarrollado WannaCry;
- desplegado el malware;
- explotado EternalBlue;
- ejecutado el cifrado masivo;
- solicitado pagos extorsivos.

Si los responsables fueran identificados y sometidos a jurisdicción chilena, podrían configurarse múltiples delitos informáticos concurrentes.

### Artículo 2 — Acceso ilícito

La **Ley 21.459, Artículo 2**, sanciona a quien:

> *"sin autorización acceda total o parcialmente a un sistema informático."

Los atacantes accedieron ilegítimamente a sistemas Windows mediante explotación de la vulnerabilidad **SMB / EternalBlue**, logrando ejecución remota de código sin autorización.

Conductas compatibles:

- intrusión remota;
- penetración de redes corporativas;
- explotación de vulnerabilidades.

---

### Artículo 1 — Ataque a la integridad de un sistema informático

La ley sanciona a quien:

> *"obstaculice gravemente el funcionamiento de un sistema informático."

La propagación tipo **worm** de WannaCry produjo:

- caída operacional;
- indisponibilidad de servicios;
- interrupción hospitalaria;
- paralización de sistemas médicos.

En un escenario chileno, el impacto sobre infraestructura crítica sanitaria podría constituir un elemento agravante relevante.

---

### Artículo 4 — Ataque a la integridad de los datos informáticos

La **Ley 21.459, Artículo 4**, castiga:

> *"alterar, dañar, deteriorar, suprimir o hacer inaccesibles datos informáticos."

El ransomware cifró archivos, bloqueó acceso a información clínica y volvió inaccesibles datos operacionales.

Ejemplos afectados:

- historias clínicas;
- registros médicos;
- documentos administrativos;
- sistemas hospitalarios.

---

### Artículo 8 — Abuso de dispositivos

El artículo 8 sanciona:

> *"producir, distribuir, importar, vender, adquirir para su utilización o facilitar programas destinados a cometer delitos informáticos."

WannaCry constituye claramente:

- malware especializado;
- herramienta ofensiva automatizada;
- programa diseñado para comprometer sistemas.

El desarrollo, distribución o utilización del ransomware podría encajar directamente en esta figura penal.

---

## Posibles facilitadores, colaboradores o intermediarios técnicos

La responsabilidad penal no necesariamente recae únicamente sobre los autores principales.

También podrían investigarse:

- distribuidores del malware;
- proveedores de infraestructura ilícita;
- operadores de botnets;
- administradores de servidores de comando y control.

Dependiendo del grado de participación, podrían responder como:

- autores;
- coautores;
- cómplices;
- encubridores.

Particularmente relevante sería nuevamente:

### **Ley 21.459 — Artículo 8 (Abuso de dispositivos)**

Por facilitar:

- malware;
- exploits;
- infraestructura ofensiva;
- herramientas de intrusión.

---

# 2. Responsabilidad Civil Derivada del Ataque

Además de las consecuencias penales, un ataque tipo WannaCry puede generar importantes consecuencias civiles.

La responsabilidad civil busca reparar económicamente el daño causado.

En un escenario equivalente bajo jurisdicción chilena, las víctimas podrían perseguir indemnización por:

## Daño emergente

Corresponde al perjuicio económico directo derivado del incidente.

Ejemplos:

- recuperación de infraestructura;
- reconstrucción de sistemas;
- contratación de expertos forenses;
- reposición tecnológica;
- interrupción operacional.

---

## Lucro cesante

Comprende beneficios económicos que dejaron de percibirse producto del ataque.

En el caso NHS:

- cancelación de procedimientos médicos;
- suspensión de atenciones;
- pérdida de productividad institucional.

---

## Daño moral institucional o individual

Podrían alegarse afectaciones relacionadas con:

- pérdida de confianza pública;
- afectación reputacional;
- impacto sobre pacientes;
- estrés organizacional derivado del incidente.

---

## Responsabilidad patrimonial de terceros negligentes

Aunque WannaCry fue principalmente un ataque criminal externo, podrían discutirse eventuales responsabilidades compartidas si determinadas organizaciones incumplieran estándares mínimos de ciberseguridad.

Por ejemplo:

- ausencia prolongada de parches críticos;
- deficiente gestión de vulnerabilidades;
- falta de controles básicos de seguridad.

Este punto normalmente se analiza bajo:

- deber de cuidado;
- diligencia organizacional;
- cumplimiento normativo.

---

# 3. Responsabilidad Administrativa y Regulatoria

Las consecuencias de un incidente como WannaCry no se limitan al ámbito penal.

Las organizaciones afectadas podrían enfrentar responsabilidades administrativas dependiendo del sector regulado y del país involucrado.

## Incumplimiento de obligaciones de seguridad

Una autoridad reguladora podría evaluar:

- ausencia de políticas de seguridad;
- debilidad de controles técnicos;
- fallas de continuidad operacional;
- incumplimiento de estándares regulatorios.

---

## Infraestructura crítica y deber reforzado de protección

En sectores sensibles como:

- salud;
- banca;
- telecomunicaciones;
- energía;

existe normalmente un estándar reforzado de diligencia.

El NHS, al ser infraestructura sanitaria esencial, posee obligaciones superiores de resiliencia tecnológica.

---

## Gobierno corporativo y compliance

Desde una perspectiva moderna de cumplimiento normativo, podrían evaluarse responsabilidades relacionadas con:

- gestión del riesgo tecnológico;
- supervisión ejecutiva;
- controles internos;
- planes de respuesta a incidentes.

---

# Tabla Resumen de Responsabilidades Potenciales

| Actor Potencial | Responsabilidad Penal | Responsabilidad Civil | Responsabilidad Administrativa |
|-----------------|----------------------|----------------------|-------------------------------|
| Operadores de WannaCry | **Art. 1, Art. 2, Art. 4, Art. 8 — Ley 21.459** | Reparación de daños causados | Eventual cooperación internacional |
| Desarrolladores / distribuidores del malware | **Art. 8 — Ley 21.459** | Posible responsabilidad solidaria | Investigación transfronteriza |
| Facilitadores técnicos / infraestructura ilícita | **Art. 8 + reglas generales de participación penal** | Eventual corresponsabilidad | Sanciones regulatorias aplicables |
| Organizaciones negligentes (hipótesis de incumplimiento) | Normalmente no penal bajo Ley 21.459 | Posible responsabilidad patrimonial | Alta exposición regulatoria |

---

# Conclusión

Aunque la autoría definitiva de **WannaCry** continúa siendo objeto de atribución internacional, la **Ley 21.459 chilena** permite construir un marco jurídico relativamente robusto para analizar responsabilidades potenciales.

Los posibles autores materiales podrían enfrentar simultáneamente:

- **Artículo 2:** acceso ilícito;
- **Artículo 1:** ataque a la integridad del sistema;
- **Artículo 4:** ataque a la integridad de datos;
- **Artículo 8:** abuso de dispositivos.

Adicionalmente, el caso abre espacio para evaluar **responsabilidades civiles derivadas del daño económico y operacional**, así como **responsabilidades administrativas vinculadas al gobierno de ciberseguridad y la protección de infraestructura crítica**.

El análisis evidencia que un incidente ransomware de escala global como WannaCry trasciende el derecho penal informático tradicional y requiere una visión integrada entre **persecución criminal, reparación patrimonial y cumplimiento regulatorio**.
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

function Responsabilidades() {
  const nodes = parseMarkdown(markdownSource)

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.08)]">
        <div className="bg-gradient-to-r from-slate-950 via-cyan-700 to-slate-900 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-cyan-200 shadow-lg shadow-cyan-500/20">
                <Gavel className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Responsabilidades</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Análisis Jurídico</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10">
          {nodes.map((node, index) => {
            if (node.type === 'heading') {
              const HeadingTag = `h${Math.min(node.level + 1, 4)}`
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
                              {cell}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {node.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="align-top border-b border-slate-200 px-4 py-4 text-slate-700">
                                {cell}
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

export default Responsabilidades
