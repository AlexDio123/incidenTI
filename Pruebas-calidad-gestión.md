# Pruebas, calidad y gestión del proyecto

## 1. Pruebas de software

Las pruebas de software son una parte fundamental del desarrollo de la **Plataforma inteligente de gestión de incidentes TI**, ya que permiten comprobar que el sistema funciona de acuerdo con los requisitos definidos.

La plataforma tiene como objetivo recibir tickets, clasificarlos automáticamente, identificar su prioridad, sugerir posibles soluciones y asignarlos al equipo correspondiente. Debido a que estos procesos involucran diferentes componentes del sistema, es necesario realizar pruebas en distintos niveles.

El proyecto **`TicketsAPI.UnitTests`** contiene pruebas enfocadas en diferentes elementos del backend. Estas pruebas son coherentes con la arquitectura por capas utilizada, ya que permiten validar cada componente de forma independiente antes de comprobar su funcionamiento conjunto.

Entre los principales componentes que cuentan con pruebas se encuentran:

* `TicketRepository`
* `TicketService`
* `TeamsController`
* `AuthController`

La existencia de estas pruebas permite considerar la calidad como una preocupación transversal del backend y no únicamente como una actividad realizada al final del desarrollo.

---

## 1.1 Pruebas unitarias

Las pruebas unitarias permiten verificar componentes individuales del sistema. Su objetivo es comprobar que una determinada función, método o clase produzca el resultado esperado cuando recibe determinados datos de entrada.

En el proyecto se realizan pruebas sobre diferentes componentes del backend.

### `TicketRepository`

Las pruebas del repositorio permiten validar las operaciones relacionadas con el almacenamiento y recuperación de los tickets.

Algunos escenarios que pueden ser comprobados son:

* Crear un nuevo ticket.
* Obtener un ticket mediante su identificador.
* Consultar una lista de tickets.
* Actualizar información de un ticket.
* Cambiar el estado de un ticket.
* Manejar correctamente un ticket que no existe.
* Verificar que los datos recuperados sean correctos.

Estas pruebas son importantes porque un problema en el acceso a los datos puede afectar directamente a las demás capas de la aplicación.

### `TicketService`

El `TicketService` contiene parte importante de la lógica de negocio de la plataforma.

Las pruebas permiten verificar comportamientos relacionados con:

* Creación de incidentes.
* Validación de información.
* Clasificación de tickets.
* Determinación de prioridad.
* Cambio de estado.
* Asignación de tickets.
* Manejo de información incorrecta.
* Gestión de tickets inexistentes.

Probar esta capa de forma independiente permite validar que las reglas de negocio funcionen correctamente sin depender directamente de la interfaz utilizada por el usuario.

### `TeamsController`

Las pruebas de `TeamsController` permiten validar las operaciones relacionadas con los equipos encargados de atender los incidentes.

Entre los escenarios que pueden ser evaluados se encuentran:

* Consultar equipos disponibles.
* Registrar equipos.
* Actualizar información de equipos.
* Validar solicitudes incorrectas.
* Manejar equipos inexistentes.
* Verificar las respuestas generadas por la API.

Esto es importante porque la asignación correcta de los incidentes depende de que la información de los equipos sea gestionada adecuadamente.

### `AuthController`

El `AuthController` tiene relación con la autenticación de los usuarios y, por lo tanto, representa un componente importante para la seguridad de la plataforma.

Las pruebas pueden validar situaciones como:

* Inicio de sesión con credenciales correctas.
* Inicio de sesión con credenciales incorrectas.
* Usuarios no autorizados.
* Información de autenticación incompleta.
* Respuestas correctas de la API.
* Manejo de solicitudes inválidas.

Estas pruebas ayudan a comprobar que el acceso a la plataforma se encuentre correctamente controlado.

---

## 1.2 Pruebas de integración

Además de las pruebas unitarias, se deben considerar las **pruebas de integración**, cuyo objetivo es comprobar que las diferentes capas del sistema puedan trabajar correctamente entre sí.

La comunicación principal del backend puede representarse de la siguiente manera:

```text
Usuario
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Base de datos
```

Por ejemplo, cuando un usuario crea un ticket, la solicitud puede seguir el siguiente proceso:

1. El usuario envía la información del incidente.
2. El `Controller` recibe la solicitud.
3. El `Service` procesa la lógica de negocio.
4. El `Repository` realiza la operación correspondiente.
5. La información es almacenada en la base de datos.
6. El sistema devuelve una respuesta al usuario.

Una prueba de integración puede comprobar que todo este proceso se complete correctamente.

También se pueden validar procesos más completos, como:

```text
Crear ticket
     ↓
Clasificar incidente
     ↓
Determinar prioridad
     ↓
Identificar equipo
     ↓
Asignar ticket
     ↓
Registrar información
```

Esto permite comprobar que los diferentes componentes funcionen correctamente como un conjunto.

---

## 1.3 Pruebas de regresión

Las **pruebas de regresión** permiten verificar que los cambios realizados en el sistema no afecten funcionalidades que anteriormente funcionaban correctamente.

Por ejemplo, si se modifica la lógica utilizada para determinar la prioridad de los tickets, se deben ejecutar nuevamente las pruebas relacionadas con:

* Creación de tickets.
* Consulta de tickets.
* Actualización de tickets.
* Clasificación.
* Prioridad.
* Asignación.

La automatización de las pruebas facilita este proceso, ya que permite ejecutar nuevamente un conjunto de pruebas después de realizar modificaciones en el código.

---

# 2. Calidad del software

La calidad del software no consiste solamente en comprobar que la aplicación funcione. También implica que el sistema sea **confiable, seguro, mantenible, eficiente y escalable**.

En el caso de la plataforma inteligente de gestión de incidentes TI, la calidad es especialmente importante porque el sistema será utilizado para administrar incidentes tecnológicos que pueden afectar las operaciones de una organización.

Un error en la clasificación o asignación de un incidente podría provocar que este sea atendido por un equipo incorrecto o que un problema importante no reciba la prioridad correspondiente.

Por esta razón, la calidad debe considerarse durante todo el ciclo de desarrollo.

---

## 2.1 Funcionalidad

La funcionalidad permite comprobar que el sistema realice correctamente las tareas para las cuales fue desarrollado.

Entre las principales funcionalidades de la plataforma se encuentran:

* Registrar incidentes.
* Consultar tickets.
* Actualizar tickets.
* Clasificar incidentes.
* Determinar prioridades.
* Asignar tickets a equipos.
* Gestionar usuarios.
* Controlar el acceso mediante autenticación.
* Mantener información relacionada con los incidentes.
* Sugerir posibles soluciones.

Las pruebas automatizadas permiten comprobar que estas funcionalidades produzcan los resultados esperados.

---

## 2.2 Confiabilidad

La confiabilidad está relacionada con la capacidad del sistema para funcionar correctamente y proporcionar resultados consistentes.

La plataforma debe manejar adecuadamente las situaciones de error. Por ejemplo, si un usuario intenta consultar un ticket que no existe, el sistema debe responder de manera controlada y no provocar una falla general de la aplicación.

Las pruebas automatizadas ayudan a identificar este tipo de situaciones antes de que el sistema sea utilizado en producción.

---

## 2.3 Mantenibilidad

La mantenibilidad es importante porque el sistema puede necesitar cambios y mejoras en el futuro.

Por ejemplo, podrían agregarse:

* Nuevos tipos de incidentes.
* Nuevas reglas de prioridad.
* Nuevos equipos.
* Nuevos roles de usuarios.
* Nuevas funcionalidades.
* Nuevas integraciones.

La separación entre **Controllers, Services y Repositories** facilita el mantenimiento, debido a que cada capa tiene responsabilidades específicas.

Por ejemplo, si se necesita modificar una regla relacionada con la prioridad de los tickets, el cambio puede concentrarse principalmente en la capa correspondiente a la lógica de negocio.

---

## 2.4 Seguridad

La seguridad es un aspecto importante debido a que la plataforma maneja información relacionada con usuarios, equipos e incidentes.

El sistema debe implementar mecanismos adecuados de autenticación y autorización para evitar accesos no permitidos.

Entre los aspectos que deben considerarse se encuentran:

* Validación de credenciales.
* Control de acceso.
* Protección de información sensible.
* Validación de datos recibidos.
* Manejo adecuado de tokens o sesiones.
* Control de permisos.
* Protección de los endpoints de la API.

Las pruebas realizadas sobre `AuthController` contribuyen a validar parte de este comportamiento.

---

## 2.5 Rendimiento

El rendimiento también debe considerarse debido a que una plataforma de gestión de incidentes puede recibir múltiples solicitudes durante el día.

El sistema debe responder en un tiempo razonable cuando los usuarios:

* Creen tickets.
* Consulten tickets.
* Actualicen información.
* Busquen incidentes.
* Consulten equipos.

También es importante que las consultas a la base de datos estén correctamente diseñadas para evitar tiempos de respuesta innecesarios.

A medida que aumente la cantidad de tickets almacenados, el sistema debe mantener un comportamiento adecuado.

---

## 2.6 Escalabilidad

La escalabilidad representa la capacidad de la plataforma para crecer sin necesidad de reconstruir completamente su arquitectura.

En el futuro podrían incorporarse funcionalidades como:

* Nuevos equipos de soporte.
* Nuevas categorías de incidentes.
* Nuevos niveles de prioridad.
* Nuevos usuarios.
* Integraciones con otras plataformas.
* Sistemas de notificaciones.
* Paneles de monitoreo.
* Reportes.
* Nuevos modelos de inteligencia artificial.

Por esta razón, es importante mantener desde el inicio una estructura organizada y modular.

---

# 3. Gestión del proyecto

La gestión del proyecto permite organizar las actividades necesarias para desarrollar la plataforma, controlar el avance y asegurar que las diferentes tareas se realicen de forma ordenada.

Para este proyecto se puede utilizar un enfoque ágil, dividiendo el desarrollo en pequeñas etapas o iteraciones.

Esto permite desarrollar funcionalidades progresivamente, realizar pruebas y corregir problemas antes de continuar con nuevas funcionalidades.

---

## 3.1 Planificación

La primera etapa consiste en definir qué se quiere desarrollar y cuáles son los objetivos principales del proyecto.

Las principales funcionalidades planificadas son:

* Gestión de usuarios.
* Gestión de equipos.
* Creación y administración de tickets.
* Clasificación de incidentes.
* Determinación de prioridad.
* Asignación de tickets.
* Autenticación.
* Sugerencia de soluciones.
* Pruebas automatizadas.

La planificación permite establecer prioridades y distribuir las actividades entre los integrantes del equipo.

---

## 3.2 Organización del trabajo

El proyecto puede dividirse en diferentes áreas para facilitar la distribución de responsabilidades.

| Área              | Actividades                              |
| ----------------- | ---------------------------------------- |
| **Backend**       | Desarrollo de API y lógica de negocio    |
| **Base de datos** | Diseño y gestión de la información       |
| **Tickets**       | Creación y administración de incidentes  |
| **Equipos**       | Gestión de equipos responsables          |
| **Seguridad**     | Autenticación y autorización             |
| **Inteligencia**  | Clasificación y sugerencia de soluciones |
| **Pruebas**       | Creación y ejecución de pruebas          |
| **Documentación** | Manuales y documentación técnica         |

Esta división permite que cada integrante tenga responsabilidades claras y facilita el seguimiento del proyecto.

---

## 3.3 Seguimiento del proyecto

Durante el desarrollo es necesario revisar periódicamente el avance del proyecto.

El seguimiento permite identificar:

* Tareas completadas.
* Tareas pendientes.
* Problemas encontrados.
* Errores durante las pruebas.
* Retrasos.
* Cambios en los requisitos.

También es importante registrar los errores encontrados durante las pruebas para poder darles seguimiento hasta su solución.

---

## 3.4 Gestión de riesgos

Todo proyecto de software puede presentar riesgos. En esta plataforma se pueden identificar diferentes riesgos relacionados con el desarrollo y funcionamiento del sistema.

| Riesgo                        | Posible impacto                         | Acción de control             |
| ----------------------------- | --------------------------------------- | ----------------------------- |
| Errores en la clasificación   | Asignación incorrecta del incidente     | Pruebas y validaciones        |
| Fallos de autenticación       | Acceso no autorizado                    | Pruebas de seguridad          |
| Problemas en la base de datos | Pérdida o inconsistencia de información | Respaldos y validaciones      |
| Bajo rendimiento              | Respuesta lenta del sistema             | Pruebas de rendimiento        |
| Errores en nuevas versiones   | Fallos en funcionalidades existentes    | Pruebas de regresión          |
| Cambios en requisitos         | Retrasos en el proyecto                 | Planificación por iteraciones |
| Fallos en integraciones       | Interrupción de procesos                | Pruebas de integración        |

Identificar estos riesgos permite establecer medidas preventivas y reducir su impacto sobre el proyecto.

---

## 3.5 Documentación

La documentación es otro elemento importante dentro de la gestión del proyecto.

Una documentación adecuada permite que otros desarrolladores puedan comprender cómo funciona la plataforma y facilita su mantenimiento.

La documentación puede incluir:

* Descripción de la arquitectura.
* Requisitos del sistema.
* Documentación de la API.
* Descripción de los endpoints.
* Estructura de la base de datos.
* Casos de prueba.
* Resultados de las pruebas.
* Manual de usuario.
* Manual técnico.
* Instrucciones de instalación.
* Instrucciones de despliegue.

Además, la documentación facilita la incorporación de nuevos integrantes al equipo de desarrollo.

---

# 4. Integración entre pruebas, calidad y gestión

Las pruebas, la calidad y la gestión del proyecto no deben considerarse actividades independientes. Las tres forman parte de un mismo proceso de desarrollo.

La gestión permite planificar las actividades, asignar responsabilidades y controlar el avance.

Las pruebas permiten comprobar que las funcionalidades desarrolladas cumplen con los requisitos establecidos.

Finalmente, los resultados de las pruebas proporcionan información que puede utilizarse para mejorar la calidad del sistema.

En este proyecto, **`TicketsAPI.UnitTests`** representa una parte importante de esta estrategia porque permite automatizar la validación de diferentes componentes del backend.

El proceso puede representarse de la siguiente manera:

```text
Planificación
      ↓
Desarrollo
      ↓
Pruebas
      ↓
Detección de errores
      ↓
Corrección
      ↓
Nueva validación
      ↓
Entrega
```

Por ejemplo, cuando se desarrolla una nueva funcionalidad relacionada con los tickets, primero se implementa el código, posteriormente se crean o actualizan las pruebas correspondientes y finalmente se ejecutan para comprobar el comportamiento esperado.

Si una prueba falla, el equipo analiza el problema, realiza la corrección y vuelve a ejecutar las pruebas.

Este proceso puede repetirse hasta obtener los resultados esperados.

---

# 5. Indicadores de calidad

Para realizar un seguimiento más objetivo de la calidad del proyecto también pueden utilizarse diferentes métricas.

Algunos indicadores importantes son:

| Indicador                | Descripción                                           |
| ------------------------ | ----------------------------------------------------- |
| **Pruebas ejecutadas**   | Cantidad de pruebas automatizadas ejecutadas          |
| **Pruebas aprobadas**    | Pruebas que obtuvieron el resultado esperado          |
| **Pruebas fallidas**     | Pruebas que detectaron algún problema                 |
| **Cobertura de código**  | Porcentaje del código ejecutado mediante pruebas      |
| **Errores encontrados**  | Cantidad de problemas detectados durante las pruebas  |
| **Tiempo de respuesta**  | Tiempo necesario para responder a una solicitud       |
| **Errores por versión**  | Cantidad de errores encontrados en cada versión       |
| **Tiempo de resolución** | Tiempo utilizado para solucionar un error o incidente |

Estas métricas permiten conocer mejor el estado del proyecto y detectar áreas que necesitan mejoras.

---

# 6. Importancia de las pruebas automatizadas

La automatización de las pruebas representa una ventaja para el proyecto porque permite ejecutar las validaciones de manera rápida y repetible.

En lugar de realizar manualmente las mismas comprobaciones cada vez que se modifica el código, las pruebas automatizadas pueden ejecutarse nuevamente para comprobar que las funcionalidades continúen funcionando.

Esto resulta especialmente útil cuando el proyecto aumenta de tamaño y se incorporan nuevas funcionalidades.

Por ejemplo:

```text
Nueva funcionalidad
        ↓
Implementación
        ↓
Pruebas unitarias
        ↓
Pruebas de integración
        ↓
Pruebas de regresión
        ↓
Validación
        ↓
Entrega
```

De esta manera, las pruebas automatizadas ayudan a reducir errores y proporcionan mayor confianza durante el desarrollo.

---

# 7. Relación con la arquitectura del sistema

La existencia del proyecto **`TicketsAPI.UnitTests`** está directamente relacionada con la arquitectura por capas de la plataforma.

La separación de responsabilidades permite probar cada nivel de manera independiente:

```text
┌─────────────────────────┐
│      Controllers        │
│ TeamsController         │
│ AuthController          │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│        Services         │
│     TicketService       │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│      Repositories       │
│    TicketRepository     │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│       Base de datos     │
└─────────────────────────┘
```

Esta organización facilita la identificación de errores, ya que permite determinar con mayor facilidad en qué componente se encuentra un problema.

Por ejemplo, si una prueba del `TicketService` falla, el equipo puede revisar específicamente la lógica de negocio relacionada con ese servicio antes de investigar otros componentes.

---

# 8. Conclusión

Las pruebas, la calidad y la gestión del proyecto son elementos fundamentales para el desarrollo de la **Plataforma inteligente de gestión de incidentes TI**.

Las pruebas permiten comprobar que los diferentes componentes funcionen correctamente y ayudan a detectar errores antes de que el sistema llegue a producción.

El proyecto **`TicketsAPI.UnitTests`** permite validar diferentes componentes del backend, incluyendo repositorios, servicios y controladores. Esta estructura es coherente con la arquitectura por capas, ya que cada nivel puede ser probado de manera independiente y posteriormente puede verificarse su integración con los demás componentes.

Por otra parte, la calidad del software se aborda desde diferentes aspectos como la funcionalidad, confiabilidad, seguridad, mantenibilidad, rendimiento y escalabilidad. Estos elementos permiten evaluar diferentes características necesarias para que la plataforma pueda cumplir con sus objetivos.

Finalmente, una adecuada gestión del proyecto permite organizar las actividades, distribuir responsabilidades, controlar el avance, gestionar riesgos y mantener la documentación necesaria.

La combinación de una **arquitectura organizada, pruebas automatizadas, control de calidad y una adecuada gestión del proyecto** permite establecer un proceso de desarrollo más ordenado y facilita la construcción de una plataforma de gestión de incidentes preparada para futuras mejoras.
