import { FileText } from 'lucide-react'

const markdownSource = `No hay contenido disponible.
El archivo Markdown fuente está vacío.`

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
