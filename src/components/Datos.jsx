import { Database } from 'lucide-react'

const markdownSource = `# Tratamiento de Datos según la Ley 19.628 de Chile

## Ley 19.628 sobre Protección de la Vida Privada

La **Ley 19.628 sobre Protección de la Vida Privada** regula en Chile el tratamiento de datos personales realizado por organismos públicos y privados. Su objetivo principal es proteger los derechos de las personas respecto a la recopilación, almacenamiento, uso, modificación, comunicación y eliminación de información asociada a su identidad.

La normativa establece obligaciones para quienes administran bases de datos y define límites jurídicos para el tratamiento de información personal.

Dentro de la ley existe una distinción importante entre **datos personales** y **datos sensibles**, lo cual resulta particularmente relevante para analizar incidentes de ciberseguridad en infraestructura sanitaria como el caso **WannaCry — NHS 2017**.

---

## Tipos de Datos según la Ley 19.628

### Datos Personales

La Ley 19.628 define los **datos personales** como cualquier información relativa a personas naturales identificadas o identificables.

Ejemplos:

- nombre completo;
- RUN / identificación;
- dirección;
- correo electrónico;
- teléfono;
- información laboral;
- antecedentes administrativos.

En un entorno hospitalario, ejemplos de datos personales serían:

- identidad del paciente;
- número de ficha clínica;
- dirección registrada;
- información de contacto.

---

### Datos Sensibles

Los **datos sensibles** corresponden a información que pertenece a la esfera más privada de la persona y cuyo tratamiento indebido puede generar discriminación, afectación de derechos o daños relevantes.

La Ley 19.628 considera como datos sensibles, entre otros:

- estado de salud físico o mental;
- antecedentes médicos;
- orientación sexual;
- ideologías;
- creencias religiosas;
- origen racial o étnico.

En el contexto del **NHS**, gran parte de la información comprometida por la indisponibilidad de sistemas corresponde precisamente a **datos sensibles de salud**.

Ejemplos:

- diagnósticos clínicos;
- exámenes médicos;
- resultados de laboratorio;
- tratamientos;
- historial médico.

---

## Derechos ARCO según la Ley 19.628

La protección de datos personales incorpora los llamados **Derechos ARCO**, mecanismos que permiten a los titulares ejercer control sobre su información.

### Derecho de Acceso

Permite al titular conocer:

- qué datos posee una organización;
- origen de la información;
- finalidad del tratamiento.

---

### Derecho de Rectificación

Faculta a solicitar corrección de datos:

- erróneos;
- incompletos;
- desactualizados.

---

### Derecho de Cancelación

Permite exigir eliminación de datos cuando:

- ya no exista fundamento legal para tratarlos;
- el tratamiento resulte improcedente.

---

### Derecho de Oposición

Otorga la posibilidad de rechazar determinados tratamientos de información cuando existan razones legítimas.

---

## ¿Por qué la Ley 19.628 es importante para este informe?

La Ley 19.628 resulta especialmente relevante para este análisis porque el caso **WannaCry — NHS 2017** no solamente involucró interrupción tecnológica y ransomware, sino también afectación potencial sobre **datos personales y datos sensibles de pacientes**.

Aunque el ataque se centró principalmente en la **disponibilidad de los sistemas**, la indisponibilidad de registros clínicos impactó directamente el acceso a información médica crítica.

Los hospitales administran grandes volúmenes de:

- datos personales;
- historiales clínicos;
- antecedentes diagnósticos;
- información sanitaria protegida.

Por ello, cualquier incidente que comprometa la disponibilidad, acceso o integridad de dichos registros posee una dimensión relevante de **protección de datos personales**.

La incorporación de la Ley 19.628 permite complementar el análisis penal realizado mediante la **Ley 21.459 sobre Delitos Informáticos**, añadiendo una perspectiva centrada en privacidad, confidencialidad y derechos de los titulares de datos.

---

## Implementación hipotética de la Ley 19.628 si WannaCry hubiera ocurrido en Chile

Si un incidente equivalente al ataque **WannaCry** hubiera afectado hospitales chilenos, la Ley 19.628 podría resultar aplicable desde múltiples perspectivas.

### Protección de datos de pacientes

Los establecimientos sanitarios actuarían como responsables de bases de datos que contienen:

- fichas clínicas;
- diagnósticos;
- exámenes médicos;
- información administrativa.

Al existir indisponibilidad o posible exposición de dicha información, podría discutirse el cumplimiento de obligaciones asociadas al tratamiento seguro de datos.

---

### Datos Sensibles comprometidos

Los sistemas hospitalarios almacenan principalmente **datos sensibles de salud**, categoría que posee mayor nivel de protección jurídica.

Una infección ransomware podría afectar:

- acceso a diagnósticos;
- continuidad de tratamientos;
- resultados clínicos;
- disponibilidad de historiales médicos.

Esto aumentaría significativamente la gravedad del incidente desde la perspectiva de privacidad y protección de datos.

---

### Ejercicio de Derechos ARCO

Los pacientes eventualmente podrían ejercer derechos vinculados a:

- acceso a sus registros médicos;
- rectificación de antecedentes erróneos;
- revisión del tratamiento de sus datos.

Si los sistemas permanecieran inaccesibles por ransomware, el ejercicio práctico de estos derechos podría verse afectado temporalmente.

---

### Relación con la Ley 21.459

En un escenario chileno, ambas normas podrían operar de forma complementaria.

**Ley 21.459:**

abordaría principalmente:

- acceso ilícito;
- ataque a sistemas;
- ataque a integridad de datos;
- abuso de dispositivos.

**Ley 19.628:**

aportaría el análisis relacionado con:

- protección de datos personales;
- tratamiento de datos sensibles;
- derechos de los titulares;
- privacidad sanitaria.

Por tanto, un caso equivalente a **WannaCry en Chile** podría requerir simultáneamente un análisis de **ciberseguridad penal** y **protección de datos personales**.
`

function parseMarkdown(text) {
  const lines = text.split('\n')
  const nodes = []
  let paragraphLines = []
  let listLines = []

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      nodes.push({ type: 'paragraph', content: paragraphLines.join(' ') })
      paragraphLines = []
    }
  }

  const flushList = () => {
    if (listLines.length > 0) {
      nodes.push({ type: 'list', items: listLines.map((line) => line.replace(/^-\s*/, '').trim()) })
      listLines = []
    }
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (line === '' || /^---+$/.test(line)) {
      flushList()
      flushParagraph()
      continue
    }

    if (line.startsWith('#')) {
      flushList()
      flushParagraph()
      const level = line.match(/^#+/)?.[0]?.length || 1
      const content = line.replace(/^#+\s*/, '')
      nodes.push({ type: 'heading', level, content })
      continue
    }

    if (line.startsWith('>')) {
      flushList()
      flushParagraph()
      nodes.push({ type: 'quote', content: line.replace(/^>\s*/, '') })
      continue
    }

    if (line.startsWith('- ')) {
      listLines.push(line)
      continue
    }

    if (listLines.length > 0) {
      flushList()
    }

    paragraphLines.push(line)
  }

  flushList()
  flushParagraph()
  return nodes
}

function Datos() {
  const nodes = parseMarkdown(markdownSource)

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.08)]">
        <div className="bg-gradient-to-r from-slate-950 via-cyan-700 to-slate-900 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-cyan-200 shadow-lg shadow-cyan-500/20">
                <Database className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Protección de datos</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Ley 19.628</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10">
          {nodes.map((node, index) => {
            if (node.type === 'heading') {
              const HeadingTag = `h${Math.min(node.level + 2, 4)}`
              const className = node.level === 1
                ? 'text-3xl font-semibold text-slate-900 sm:text-4xl'
                : node.level === 2
                ? 'text-2xl font-semibold text-slate-900 sm:text-3xl'
                : 'text-xl font-semibold text-slate-900'
              return (
                <HeadingTag key={index} className={className}>
                  {node.content}
                </HeadingTag>
              )
            }

            if (node.type === 'quote') {
              return (
                <blockquote key={index} className="rounded-3xl border-l-4 border-cyan-500 bg-slate-100 p-6 text-slate-700 italic">
                  {node.content}
                </blockquote>
              )
            }

            if (node.type === 'list') {
              return (
                <ul key={index} className="list-disc space-y-2 pl-6 text-slate-700">
                  {node.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
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

export default Datos
