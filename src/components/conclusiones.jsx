import { CheckCircle } from 'lucide-react'

const markdownSource = `# Conclusiones.

## Conclusiones del caso.

Con la investigacion de el caso WannaCry terminado, es facil decir que los usuarios que no actualizaban de manera seguida los dispositivos fueron los culpables ya que la actualización de windows que fue lanzada unos meses antes, la realidad es que incluso en tiempos actuales, la mentalidad de los usuarios de que no es necesario actualizar dispositivos constantementes por ser "perdidas de tiempo" pero esto siempre sera necesario para mantener sus datos personales a salvo.

Gracias a los cambios en las leyes de seguridad virtual, tanto de forma nacional e intercional, los afectados pueden buscar justicia en contra los atacantes que trataron de robar o extorcionar los datos de estos.

## Conclusiones personales.

Este caso fue un ejercicio muy interesante de desarrollar, ya que a pesar de ser aun un estudiante de primer semestre que aun no tiene los conocimientos que los alumnos de segundo años tienen, este fue uno de los ejercicios mas divertidos que e hecho en años. Este proyecto me ayudo a explorar la funcionalidad de visual studio code y la capacidad de las Inteligencias artificiales de poder ayudar a solucionar errores menores que podrian romper cualquier proyecto.

Espero en un futuro el poder desarrollar mas facil paginas web que puedan ser consideradas profesionales y usarlas como un robusto portafolio que me dara una gran oportunidad laboral.
`

function parseMarkdown(text) {
  const lines = text.split('\n')
  const nodes = []
  let paragraphLines = []

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      nodes.push({ type: 'paragraph', content: paragraphLines.join(' ') })
      paragraphLines = []
    }
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (line === '') {
      flushParagraph()
      continue
    }

    if (line.startsWith('#')) {
      flushParagraph()
      const level = line.match(/^#+/)?.[0]?.length || 1
      const content = line.replace(/^#+\s*/, '')
      nodes.push({ type: 'heading', level, content })
      continue
    }

    paragraphLines.push(line)
  }

  flushParagraph()
  return nodes
}

function Conclusiones() {
  const nodes = parseMarkdown(markdownSource)

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.08)]">
        <div className="bg-gradient-to-r from-slate-950 via-cyan-700 to-slate-900 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-cyan-200 shadow-lg shadow-cyan-500/20">
                <CheckCircle className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Conclusiones</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Reflexiones Finales</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10">
          {nodes.map((node, index) => {
            if (node.type === 'heading') {
              const HeadingTag = `h${Math.min(node.level + 1, 4)}`
              const className = node.level === 1
                ? 'text-3xl font-semibold text-slate-900 sm:text-4xl'
                : 'text-2xl font-semibold text-slate-900 sm:text-3xl'
              return (
                <HeadingTag key={index} className={className}>
                  {node.content}
                </HeadingTag>
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

export default Conclusiones
