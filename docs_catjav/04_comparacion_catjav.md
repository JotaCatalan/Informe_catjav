# Tabla Comparativa de Marcos Regulatorios por Industria — Caso WannaCry (NHS, 2017)

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