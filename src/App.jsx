import { Shield, BookOpen } from 'lucide-react'
// import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
// import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/conclusiones'
import Prompt from './components/prompt'

function App() {
    return (
        <div className="min-h-screen flex flex-col gradient-llamativo">
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

            <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white/80 rounded-lg shadow p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="text-[var(--brand)]" />
                        <h2 className="text-xl font-semibold text-[var(--brand)]">
                            Caso WannaCry 2017
                        </h2>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                        Este sitio contiene el análisis legal del caso WannaCry del año 2017, que causó muchos estragos a nivel global.
                        Las secciones se irán incorporando como componentes individuales en el menú superior.
                    </p>
                </div>
                <div className="space-y-8">
                    <Marco />
                    <Delitos />
                    <Comparacion />
                    <Datos />
                    <Conclusiones />
                    <Prompt />
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