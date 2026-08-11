# Fitness Coach — versión profesional editable

## Estructura

- `index.html` — interfaz principal.
- `css/styles.css` — estilos.
- `js/exercises.js` — catálogo editable de los 48 ejercicios.
- `js/app.js` — filtros, favoritos, modal y rutinas.
- `assets/exercises/001.jpg` ... `048.jpg` — una imagen independiente por página del PDF.

## Cambiar una imagen

Reemplaza, por ejemplo:

`assets/exercises/017.jpg`

por otra imagen manteniendo el mismo nombre.

No necesitas modificar el HTML ni JavaScript.

## Cambiar los datos de un ejercicio

Abre:

`js/exercises.js`

Busca el objeto con:

`"id": 17`

y modifica los campos.

## Importante sobre el PDF

El PDF proporcionado está compuesto esencialmente por imágenes y no contiene texto extraíble fiable. Por eso las imágenes se conservan como fuente principal. Los campos que no pueden verificarse desde el documento están marcados como editables/“Por definir”, en vez de atribuirle al PDF información que no contiene de forma verificable.


## Criterio de volumen añadido

Las series/repeticiones/descansos son objetivos iniciales de programación, no cifras que el PDF necesariamente indique. Se priorizan:
- ejercicios técnicos: 8–15 repeticiones y descansos de 60–90 s;
- trabajo de core/aislamiento: 10–20 repeticiones o 20–40 s;
- ejercicios unilaterales: repeticiones por lado;
- movimientos explosivos: menos repeticiones y descansos más largos.

El nivel y material son una clasificación práctica del coach basada en la ejecución visible.


## Seguimiento de rutina

La pestaña `Mi rutina` permite:
- Ver el progreso de la sesión en porcentaje.
- Marcar cada serie como realizada.
- Registrar repeticiones reales.
- Registrar peso utilizado.
- Registrar RPE (6–10) opcional.
- Marcar el ejercicio completo.
- Añadir notas de la sesión.
- Reiniciar la sesión del día.
- Mantener los datos guardados en el navegador mediante localStorage.

Los datos de la sesión se guardan por fecha local de la aplicación.


V4 - Rutinas inteligentes
- Ya no se registran reps reales, peso, RPE ni notas de sesión.
- Las repeticiones y series mostradas son las sugeridas por el coach.
- Antes de generar la rutina se pregunta duración: 30, 60, 90 o 120 minutos.
- Se pregunta cantidad de ejercicios.
- Se puede seleccionar foco por objetivos y prioridad muscular.
- La selección es aleatoria dentro de los filtros.
- Para sesiones largas se amplía la selección o se contemplan rondas, sin modificar las repeticiones recomendadas.
