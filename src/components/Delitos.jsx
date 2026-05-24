import { ShieldAlert } from 'lucide-react'

function Delitos() {
  const articles = [
    {
      number: 'Artículo 1',
      title: 'Acceso ilícito',
      description:
        'Define y castiga el ingreso no autorizado a sistemas, redes o datos protegidos. Es la base jurídica para tipificar el acceso indebido a recursos ajenos sin permiso del titular.',
    },
    {
      number: 'Artículo 2',
      title: 'Ataque al sistema',
      description:
        'Sanciona las acciones dirigidas a dañar, inutilizar o alterar el funcionamiento de sistemas informáticos. Engloba malware, intrusión, y operaciones que impiden el servicio normal de equipos críticos.',
    },
    {
      number: 'Artículo 4',
      title: 'Ransomware',
      description:
        'Aplica a la encriptación forzada de información y la exigencia de pago por recuperación. El ransomware se clasifica aquí como un ataque de datos y de disponibilidad que compromete el acceso a activos digitales vitales.',
    },
    {
      number: 'Artículo 8',
      title: 'Abuso de dispositivos',
      description:
        'Castiga el uso indebido de equipos, herramientas o códigos para cometer delitos informáticos. Incluye la tenencia, suministro o explotación de dispositivos y software malicioso para vulnerar sistemas.',
    },
  ]

  const concepts = [
    {
      title: 'Acceso ilícito',
      text: 'Ingreso sin autorización a sistemas, cuentas u ojos protegidos. Se configura cuando un atacante utiliza credenciales robadas, explota vulnerabilidades o fuerza entradas a recursos reservados.',
    },
    {
      title: 'Ataque al sistema',
      text: 'Interferencia deliberada en la operación de sistemas o redes. Incluye denegación de servicio, manipulación de procesos y acciones que degradan la disponibilidad y la integridad del sistema.',
    },
    {
      title: 'Ransomware',
      text: 'Malware que cifra datos y exige rescate por su liberación. Va más allá del acceso ilícito al sumar daño extorsivo, afectación a activos esenciales y paralización de operaciones críticas.',
    },
    {
      title: 'Abuso de dispositivos',
      text: 'Uso criminal de equipos, programas o herramientas para facilitar delitos. Se extiende a la creación, distribución y empleo de dispositivos para vulnerar la seguridad informática.',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg shadow-slate-200/30">
        <div className="bg-gradient-to-r from-slate-950 via-cyan-700 to-slate-900 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-cyan-200 shadow-lg shadow-cyan-500/10">
                <ShieldAlert className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Delitos Informáticos</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Artículo 1, 2, 4 y 8</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.number} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-700">
                {article.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{article.description}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-200 bg-slate-100 px-6 py-8 sm:px-8">
          <h3 className="text-2xl font-semibold text-slate-900">Conceptos clave</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {concepts.map((concept) => (
              <div key={concept.title} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">{concept.title}</h4>
                <p className="mt-3 text-slate-600 leading-7">{concept.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delitos
