# Análisis del Caso WannaCry (2017) mediante la Ley 21.459 de Chile

## Caso: WannaCry Ransomware — Ataque Global de Mayo de 2017

El ataque **WannaCry** fue uno de los incidentes de ransomware más importantes de la historia reciente. El malware afectó aproximadamente **230.000 equipos en más de 150 países**, incluyendo empresas, gobiernos e infraestructura crítica como el **National Health Service (NHS) del Reino Unido**. El ataque combinó **explotación de vulnerabilidades, propagación automática tipo gusano (worm), cifrado de archivos y extorsión económica**. :contentReference[oaicite:0]{index=0}

---

# Paso a Paso del Ataque y Aplicación de la Ley 21.459

## Paso 1 — Identificación de sistemas vulnerables

### ¿Qué hicieron los atacantes?

Los operadores de WannaCry identificaron sistemas Windows que mantenían activa una vulnerabilidad del protocolo **SMB (Server Message Block)** de Microsoft.

La vulnerabilidad utilizada fue **EternalBlue (MS17-010)**, exploit originalmente desarrollado por la NSA y posteriormente filtrado por el grupo Shadow Brokers.

El fallo permitía ejecutar código remoto en computadores Windows sin necesidad de interacción del usuario. Microsoft había liberado previamente un parche de seguridad, pero miles de sistemas permanecían sin actualizar. :contentReference[oaicite:1]{index=1}

### Aplicación Ley 21.459

#### **Artículo 2 — Acceso ilícito**

> *"El que, sin autorización o excediendo la autorizada, acceda a un sistema informático..."*

Este paso constituye **acceso no autorizado** porque los atacantes ingresaron a sistemas informáticos aprovechando una vulnerabilidad técnica sin consentimiento del propietario del sistema.

**Configuración jurídica probable:**

- acceso remoto no autorizado;
- ejecución arbitraria de código;
- penetración ilícita de sistemas vulnerables.

---

## Paso 2 — Compromiso inicial del equipo objetivo

### ¿Qué hicieron los atacantes?

Una vez explotada la vulnerabilidad SMB, WannaCry instalaba un **dropper malicioso** dentro del sistema comprometido.

El dropper contenía:

- módulo de cifrado;
- claves criptográficas;
- mecanismo de propagación;
- copia de **Tor** para comunicaciones de comando y control (C2). :contentReference[oaicite:2]{index=2}

El malware obtenía persistencia y preparaba la fase de ejecución del ransomware.

### Aplicación Ley 21.459

#### **Artículo 8 — Abuso de dispositivos**

> *"El que produzca, venda, distribuya, importe, obtenga para su utilización o facilite programas computacionales diseñados para cometer delitos informáticos..."*

WannaCry califica técnicamente como:

- software malicioso;
- herramienta de intrusión;
- programa diseñado para vulnerar sistemas.

Por lo tanto, el desarrollo, distribución o uso operativo del malware podría subsumirse dentro del delito de **abuso de dispositivos**.

---

## Paso 3 — Propagación automática dentro de la red

### ¿Qué hicieron los atacantes?

A diferencia de muchos ransomware tradicionales, WannaCry actuaba como **worm (gusano informático)**.

Después de comprometer un equipo:

1. escaneaba otros computadores vulnerables;
2. buscaba sistemas sin parche;
3. reutilizaba EternalBlue;
4. se desplazaba lateralmente dentro de la red.

Esto permitió infecciones extremadamente rápidas en organizaciones grandes como hospitales, empresas y organismos públicos. :contentReference[oaicite:3]{index=3}

### Aplicación Ley 21.459

#### **Artículo 1 — Ataque a la integridad de un sistema informático**

> *"El que obstaculice gravemente el funcionamiento de un sistema informático..."*

La propagación masiva generó:

- indisponibilidad operacional;
- caída de servicios;
- interrupción de redes internas;
- bloqueo funcional de infraestructura tecnológica.

En el caso del NHS:

- hospitales suspendieron operaciones;
- ambulancias fueron redirigidas;
- miles de citas médicas fueron canceladas.

La afectación cumple claramente el criterio de **entorpecimiento grave del funcionamiento del sistema**.

---

## Paso 4 — Cifrado de archivos y bloqueo de acceso

### ¿Qué hicieron los atacantes?

Una vez instalado, WannaCry ejecutaba su función principal: **cifrar archivos del sistema víctima**.

El ransomware:

- bloqueaba acceso a datos;
- inutilizaba archivos corporativos;
- impedía uso normal del computador;
- mostraba una nota exigiendo rescate.

El rescate inicial era de **USD 300 en Bitcoin**, aumentando posteriormente a USD 600. :contentReference[oaicite:4]{index=4}

### Aplicación Ley 21.459

#### **Artículo 4 — Ataque a la integridad de los datos informáticos**

> *"El que indebidamente altere, dañe, suprima o haga inaccesibles datos informáticos..."*

El cifrado realizado por WannaCry constituye directamente:

- alteración de disponibilidad;
- inaccesibilidad de información;
- daño funcional sobre datos.

Ejemplos afectados en el NHS:

- historias clínicas;
- sistemas médicos;
- registros administrativos;
- datos hospitalarios.

Aunque los archivos no fueran eliminados permanentemente, la ley chilena contempla también el supuesto de **hacer inaccesibles los datos**.

---

## Paso 5 — Extorsión económica mediante rescate

### ¿Qué hicieron los atacantes?

Tras completar el cifrado, WannaCry desplegaba una pantalla de rescate.

Los operadores exigían pago en **Bitcoin** a cambio de una supuesta clave de descifrado.

El objetivo final era obtener un beneficio económico mediante coerción tecnológica. :contentReference[oaicite:5]{index=5}

### Aplicación Ley 21.459

La Ley 21.459 no contiene un artículo específico denominado "ransomware", pero el comportamiento puede vincularse con:

#### **Artículo 1 — Ataque a sistemas**
#### **Artículo 4 — Ataque a datos**
#### eventualmente delitos patrimoniales complementarios según legislación penal chilena.

La finalidad económica constituye un elemento relevante para determinar:

- agravantes;
- concurso de delitos;
- beneficio patrimonial ilícito.

---

# Evaluación Jurídica del Caso bajo Ley 21.459

| Conducta del atacante | Técnica utilizada | Artículo aplicable | Configuración jurídica |
|----------------------|-------------------|-------------------|------------------------|
| Explotación EternalBlue | Vulnerabilidad SMB | Art. 2 | Acceso ilícito |
| Instalación del malware | Dropper / ransomware | Art. 8 | Abuso de dispositivos |
| Propagación worm | Movimiento lateral | Art. 1 | Ataque a integridad del sistema |
| Cifrado de archivos | Ransomware | Art. 4 | Ataque a integridad de datos |
| Paralización del NHS | Interrupción operacional | Art. 1 | Obstaculización grave del sistema |

---

# Conclusión

Desde la perspectiva de la **Ley 21.459 chilena**, WannaCry constituye un caso paradigmático de ciberdelito complejo y multinivel.

El ataque permite configurar simultáneamente múltiples figuras penales:

- **Artículo 2:** acceso ilícito.
- **Artículo 8:** abuso de dispositivos.
- **Artículo 1:** ataque a la integridad del sistema.
- **Artículo 4:** ataque a la integridad de los datos.

La normativa chilena moderna ofrece un marco significativamente más robusto que la antigua Ley 19.223 para abordar incidentes de ransomware, particularmente en contextos de **infraestructura crítica**, **malware automatizado** y **ataques transnacionales**.

---

## Referencias

1. Cloudflare. *¿Qué fue el ataque de ransomware WannaCry?*  
   https://www.cloudflare.com/es-es/learning/security/ransomware/wannacry-ransomware/

2. Akamai. *¿Qué es el ransomware WannaCry?*  
   https://www.akamai.com/es/glossary/what-is-wannacry-ransomware

3. Fortinet. *What is WannaCry Ransomware Attack?*  
   https://www.fortinet.com/lat/resources/cyberglossary/wannacry-ransomware-attack