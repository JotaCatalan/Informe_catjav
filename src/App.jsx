import { Shield, BookOpen } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/conclusiones'
import Prompt from './components/prompt'

function App() {
    return (
        <div className="min-h-screen flex flex-col gradient-llamativo scroll-smooth">
            <header className="bg-[var(--brand)] text-white py-10 px-6 shadow">
                <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <Shield size={40} className="text-[var(--accent)]" />
                    <div>
                        <h1 className="text-3xl font-bold">
                            Evaluación 2 — Unidad 2
                        </h1>
                        <p className="text-slate-200 mt-1">
                            TI3034 — Fundamentos de Seguridad de la Información
                        </p>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
                    <aside className="hidden xl:block">
                        <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/20 backdrop-blur-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                                Navegación del informe
                            </p>
                            <div className="mt-6 space-y-3">
                                <a href="#resumen" className="block rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                                    Resumen
                                </a>
                                <a href="#marco" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Marco
                                </a>
                                <a href="#delitos" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Delitos
                                </a>
                                <a href="#comparacion" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Comparación
                                </a>
                                <a href="#responsabilidades" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Responsabilidades
                                </a>
                                <a href="#datos" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Datos
                                </a>
                                <a href="#conclusiones" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Conclusiones
                                </a>
                                <a href="#prompt" className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                                    Prompt
                                </a>
                            </div>
                        </div>
                    </aside>

                    <div className="space-y-8">
                        <section id="resumen">
                            <Resumen />
                        </section>
                        <section id="marco">
                            <Marco />
                        </section>
                        <section id="delitos">
                            <Delitos />
                        </section>
                        <section id="comparacion">
                            <Comparacion />
                        </section>
                        <section id="responsabilidades">
                            <Responsabilidades />
                        </section>
                        <section id="datos">
                            <Datos />
                        </section>
                        <section id="conclusiones">
                            <Conclusiones />
                        </section>
                        <section id="prompt">
                            <Prompt />
                        </section>
                    </div>
                </div>
            </main>

            <footer className="footer-pattern text-slate-700 text-sm py-4 px-6">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <span>Estudiante: <span className="text-brand font-semibold">Javier Felipe Catalán Marchese</span></span>
                    <span>Docente: Rubén Schnettler L. — INACAP Valparaíso</span>
                </div>
            </footer>
        </div>
    )
}

export default App