// FITNESS COACH — CATÁLOGO EDITABLE
// Volumen, nivel, material y técnica: recomendación del coach basada en la ejecución visible.
// La imagen de cada registro corresponde a la página homónima del PDF.
// Si reemplazas un JPG manteniendo el nombre, no necesitas modificar este archivo.

const EXERCISES = [
  {
    "id": 1,
    "name": "Extensión de brazos en cuadrupedia con apoyo elevado",
    "image": "assets/exercises/001.jpg",
    "sourcePage": 1,
    "goals": [
      "core",
      "cuerpo completo"
    ],
    "level": "Inicial",
    "equipment": "Banco/caja",
    "sets": "3",
    "reps": "10–15",
    "rest": "45–60 s",
    "muscles": [
      "core",
      "hombros"
    ],
    "technique": "Mantén abdomen activo y espalda neutra; mueve desde hombros sin colapsar la zona lumbar.",
    "commonMistakes": "Arquear la espalda; llevar hombros a las orejas; perder el control.",
    "progression": "Aumenta a 15 repeticiones o baja progresivamente el apoyo.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 2,
    "name": "Puente de glúteos unilateral",
    "image": "assets/exercises/002.jpg",
    "sourcePage": 2,
    "goals": [
      "glúteos",
      "piernas",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "glúteo mayor",
      "isquiotibiales"
    ],
    "technique": "Eleva la pelvis hasta formar una línea hombros-cadera-rodilla; pelvis estable.",
    "commonMistakes": "Girar la pelvis; hiperextender la espalda; empujar con el cuello.",
    "progression": "Añade pausa de 2 s arriba o carga sobre la cadera.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 3,
    "name": "Sentadilla goblet con mancuerna",
    "image": "assets/exercises/003.jpg",
    "sourcePage": 3,
    "goals": [
      "piernas",
      "glúteos",
      "cuerpo completo"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12",
    "rest": "60–90 s",
    "muscles": [
      "cuádriceps",
      "glúteos",
      "core"
    ],
    "technique": "Pies firmes, rodillas siguen la línea de los pies y tronco estable.",
    "commonMistakes": "Colapsar rodillas hacia dentro; despegar talones; perder neutralidad lumbar.",
    "progression": "Aumenta carga gradualmente manteniendo técnica.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 4,
    "name": "Elevación de piernas sentado",
    "image": "assets/exercises/004.jpg",
    "sourcePage": 4,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–15",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "flexores de cadera"
    ],
    "technique": "Inclina ligeramente el tronco, activa abdomen y eleva las piernas sin impulso.",
    "commonMistakes": "Balancearse; lanzar las piernas; encoger hombros.",
    "progression": "Pasa de rodillas flexionadas a piernas más extendidas.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 5,
    "name": "Elevación de piernas sentado — apertura",
    "image": "assets/exercises/005.jpg",
    "sourcePage": 5,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "oblicuos",
      "flexores de cadera"
    ],
    "technique": "Controla la apertura de piernas y evita que el tronco rote.",
    "commonMistakes": "Usar impulso; redondear excesivamente la espalda.",
    "progression": "Aumenta amplitud antes de añadir carga.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 6,
    "name": "Elevación de piernas sentado — aducción",
    "image": "assets/exercises/006.jpg",
    "sourcePage": 6,
    "goals": [
      "abdomen",
      "core",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–15",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "aductores"
    ],
    "technique": "Mantén el pecho estable y junta las piernas con control.",
    "commonMistakes": "Mover todo el tronco; acelerar la fase de retorno.",
    "progression": "Añade pausas o lastre ligero cuando controles el movimiento.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 7,
    "name": "Abdominal sentado con tijera de piernas",
    "image": "assets/exercises/007.jpg",
    "sourcePage": 7,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–20 alternadas",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "oblicuos",
      "flexores de cadera"
    ],
    "technique": "Mantén abdomen contraído y piernas activas; amplitud controlada.",
    "commonMistakes": "Balancearse hacia atrás; perder tensión abdominal.",
    "progression": "Aumenta tiempo bajo tensión antes de añadir peso.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 8,
    "name": "Zancada lateral con mancuernas",
    "image": "assets/exercises/008.jpg",
    "sourcePage": 8,
    "goals": [
      "piernas",
      "glúteos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12 por lado",
    "rest": "60–90 s",
    "muscles": [
      "glúteo medio",
      "aductores",
      "cuádriceps"
    ],
    "technique": "Lleva la cadera atrás sobre la pierna que flexiona y conserva el pie contrario apoyado.",
    "commonMistakes": "Rodilla colapsada; talón elevado; inclinarse sin control.",
    "progression": "Aumenta carga o profundidad progresivamente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 9,
    "name": "Apertura de pecho con mancuernas en suelo",
    "image": "assets/exercises/009.jpg",
    "sourcePage": 9,
    "goals": [
      "pecho",
      "cuerpo superior"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–75 s",
    "muscles": [
      "pectoral mayor",
      "deltoides anterior"
    ],
    "technique": "Codos suavemente flexionados y baja hasta un rango cómodo; no rebotes.",
    "commonMistakes": "Bajar demasiado; bloquear codos; perder control.",
    "progression": "Aumenta carga solo cuando controles el recorrido.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 10,
    "name": "Press de pecho con mancuernas en suelo",
    "image": "assets/exercises/010.jpg",
    "sourcePage": 10,
    "goals": [
      "pecho",
      "brazos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12",
    "rest": "60–90 s",
    "muscles": [
      "pectoral",
      "tríceps",
      "deltoides anterior"
    ],
    "technique": "Apoya la parte posterior de los brazos de forma controlada y presiona hacia arriba.",
    "commonMistakes": "Rebotar con los codos; abrirlos demasiado; perder estabilidad.",
    "progression": "Sube carga en pequeños incrementos.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 11,
    "name": "Press de pecho alternado con mancuernas en suelo",
    "image": "assets/exercises/011.jpg",
    "sourcePage": 11,
    "goals": [
      "pecho",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12 por lado",
    "rest": "60–90 s",
    "muscles": [
      "pectoral",
      "tríceps",
      "core"
    ],
    "technique": "Mientras un brazo trabaja, evita que el torso rote.",
    "commonMistakes": "Rotación de cadera; acelerar; hombros encogidos.",
    "progression": "Aumenta carga manteniendo pelvis estable.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 12,
    "name": "Press cerrado con mancuernas en suelo",
    "image": "assets/exercises/012.jpg",
    "sourcePage": 12,
    "goals": [
      "pecho",
      "tríceps"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–75 s",
    "muscles": [
      "tríceps",
      "pectoral"
    ],
    "technique": "Mantén mancuernas próximas y codos relativamente cerca del cuerpo.",
    "commonMistakes": "Abrir codos; perder muñecas neutras.",
    "progression": "Aumenta carga progresivamente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 13,
    "name": "Patada de glúteo en cuadrupedia — rodilla flexionada",
    "image": "assets/exercises/013.jpg",
    "sourcePage": 13,
    "goals": [
      "glúteos",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "glúteo mayor"
    ],
    "technique": "Empuja el talón hacia arriba sin girar la pelvis.",
    "commonMistakes": "Arquear lumbar; abrir la cadera; usar impulso.",
    "progression": "Añade banda o pausas arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 14,
    "name": "Patada de glúteo en cuadrupedia — pierna extendida",
    "image": "assets/exercises/014.jpg",
    "sourcePage": 14,
    "goals": [
      "glúteos",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "glúteo mayor",
      "isquiotibiales"
    ],
    "technique": "Extiende la pierna manteniendo cadera cuadrada al suelo.",
    "commonMistakes": "Girar la pelvis; subir demasiado la pierna.",
    "progression": "Añade banda o mayor tiempo bajo tensión.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 15,
    "name": "Extensión de cadera desde rodillas",
    "image": "assets/exercises/015.jpg",
    "sourcePage": 15,
    "goals": [
      "glúteos",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15",
    "rest": "45–60 s",
    "muscles": [
      "glúteo mayor",
      "isquiotibiales"
    ],
    "technique": "Contrae glúteos al extender cadera y mantén costillas controladas.",
    "commonMistakes": "Hiperextender espalda; empujar con lumbar.",
    "progression": "Añade carga ligera sobre cadera si la técnica es sólida.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 16,
    "name": "Patada de glúteo lateral en cuadrupedia",
    "image": "assets/exercises/016.jpg",
    "sourcePage": 16,
    "goals": [
      "glúteos",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "glúteo medio",
      "glúteo mayor"
    ],
    "technique": "Eleva la pierna hacia atrás/lateral sin rotar el tronco.",
    "commonMistakes": "Abrir todo el cuerpo; perder apoyo de manos.",
    "progression": "Añade banda de resistencia.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 17,
    "name": "Remo inclinado con mancuernas — espalda",
    "image": "assets/exercises/017.jpg",
    "sourcePage": 17,
    "goals": [
      "espalda",
      "brazos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–90 s",
    "muscles": [
      "dorsal ancho",
      "romboides",
      "bíceps"
    ],
    "technique": "Bisagra de cadera, espalda neutra y lleva codos hacia atrás.",
    "commonMistakes": "Redondear espalda; tirar con impulso; encoger hombros.",
    "progression": "Aumenta carga manteniendo pausa arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 18,
    "name": "Bisagra de cadera con mancuernas — énfasis posterior",
    "image": "assets/exercises/018.jpg",
    "sourcePage": 18,
    "goals": [
      "espalda",
      "glúteos",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–12",
    "rest": "60–90 s",
    "muscles": [
      "isquiotibiales",
      "glúteos",
      "erectores"
    ],
    "technique": "Empuja la cadera atrás y mantén mancuernas cerca del cuerpo.",
    "commonMistakes": "Convertirlo en sentadilla; redondear espalda.",
    "progression": "Aumenta carga gradualmente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 19,
    "name": "Remo con mancuerna a dos brazos",
    "image": "assets/exercises/019.jpg",
    "sourcePage": 19,
    "goals": [
      "espalda",
      "brazos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–12",
    "rest": "60–90 s",
    "muscles": [
      "dorsal ancho",
      "romboides",
      "bíceps"
    ],
    "technique": "Tira hacia la cadera y controla la bajada.",
    "commonMistakes": "Encoger hombros; usar balanceo.",
    "progression": "Aumenta carga cuando puedas pausar arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 20,
    "name": "Remo alto/reverse fly inclinado",
    "image": "assets/exercises/020.jpg",
    "sourcePage": 20,
    "goals": [
      "espalda",
      "hombros"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "12–15",
    "rest": "60 s",
    "muscles": [
      "deltoides posterior",
      "romboides"
    ],
    "technique": "Abre los brazos con codos suaves y junta escápulas sin elevar hombros.",
    "commonMistakes": "Impulso; exceso de peso; encoger cuello.",
    "progression": "Aumenta repeticiones antes que peso.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 21,
    "name": "Pájaros inclinados con mancuernas",
    "image": "assets/exercises/021.jpg",
    "sourcePage": 21,
    "goals": [
      "espalda",
      "hombros"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "12–15",
    "rest": "60 s",
    "muscles": [
      "deltoides posterior",
      "romboides"
    ],
    "technique": "Tronco estable y brazos se abren en arco controlado.",
    "commonMistakes": "Balancear pesas; rotar el torso.",
    "progression": "Añade pausa de 1–2 s arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 22,
    "name": "Elevación de piernas sentado con silla — rodillas flexionadas",
    "image": "assets/exercises/022.jpg",
    "sourcePage": 22,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–15",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "flexores de cadera"
    ],
    "technique": "Eleva rodillas sin colapsar el pecho y controla el descenso.",
    "commonMistakes": "Impulsarse con los brazos; caer al bajar.",
    "progression": "Progresa extendiendo una o ambas piernas.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 23,
    "name": "Elevación de piernas sentado con silla — piernas extendidas",
    "image": "assets/exercises/023.jpg",
    "sourcePage": 23,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "flexores de cadera"
    ],
    "technique": "Extiende piernas y eleva desde la cadera con control.",
    "commonMistakes": "Mover el tronco; rebotes.",
    "progression": "Reduce amplitud si pierdes control y progresa después.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 24,
    "name": "Elevación de piernas sentado unilateral",
    "image": "assets/exercises/024.jpg",
    "sourcePage": 24,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "flexores de cadera",
      "oblicuos"
    ],
    "technique": "Alterna piernas manteniendo pelvis estable.",
    "commonMistakes": "Rotar el torso; balancearse.",
    "progression": "Aumenta pausas y amplitud.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 25,
    "name": "Tijera lateral sentado",
    "image": "assets/exercises/025.jpg",
    "sourcePage": 25,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–20 por lado",
    "rest": "45–60 s",
    "muscles": [
      "oblicuos",
      "recto abdominal"
    ],
    "technique": "Alterna piernas hacia fuera sin perder tensión abdominal.",
    "commonMistakes": "Usar impulso; hundir lumbar.",
    "progression": "Aumenta tiempo bajo tensión.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 26,
    "name": "Remo/prone row con mancuernas",
    "image": "assets/exercises/026.jpg",
    "sourcePage": 26,
    "goals": [
      "espalda",
      "brazos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–90 s",
    "muscles": [
      "dorsal",
      "romboides",
      "bíceps"
    ],
    "technique": "Tira las mancuernas hacia las costillas y baja lento.",
    "commonMistakes": "Separar demasiado codos; rebote.",
    "progression": "Aumenta carga con control.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 27,
    "name": "Reverse fly tumbado",
    "image": "assets/exercises/027.jpg",
    "sourcePage": 27,
    "goals": [
      "espalda",
      "hombros"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "12–15",
    "rest": "60 s",
    "muscles": [
      "deltoides posterior",
      "romboides"
    ],
    "technique": "Abre brazos formando una T y controla la vuelta.",
    "commonMistakes": "Elevar demasiado; cargar pesado.",
    "progression": "Añade pausa arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 28,
    "name": "Dead bug con mancuerna",
    "image": "assets/exercises/028.jpg",
    "sourcePage": 28,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12 por lado",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "transverso",
      "flexores de cadera"
    ],
    "technique": "Mantén lumbar estable mientras alternas brazos/piernas.",
    "commonMistakes": "Arquear lumbar; mover rápido.",
    "progression": "Aumenta carga o amplitud gradualmente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 29,
    "name": "Dead bug con extensión de piernas",
    "image": "assets/exercises/029.jpg",
    "sourcePage": 29,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "transverso"
    ],
    "technique": "Extiende piernas solo hasta donde mantengas lumbar estable.",
    "commonMistakes": "Despegar lumbar; perder control.",
    "progression": "Extiende más lejos o añade pausa.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 30,
    "name": "Russian twist con peso",
    "image": "assets/exercises/030.jpg",
    "sourcePage": 30,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "12–20 totales",
    "rest": "45–60 s",
    "muscles": [
      "oblicuos",
      "recto abdominal"
    ],
    "technique": "Rota el tronco de forma controlada y mantén pecho abierto.",
    "commonMistakes": "Mover solo brazos; redondear excesivamente espalda.",
    "progression": "Aumenta carga moderadamente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 31,
    "name": "Crunch con piernas elevadas",
    "image": "assets/exercises/031.jpg",
    "sourcePage": 31,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "12–20",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal"
    ],
    "technique": "Eleva escápulas del suelo sin tirar del cuello.",
    "commonMistakes": "Tirar de la cabeza; impulso.",
    "progression": "Añade pausa arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 32,
    "name": "Bear plank / plancha de oso",
    "image": "assets/exercises/032.jpg",
    "sourcePage": 32,
    "goals": [
      "core",
      "cuerpo completo"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "20–40 s",
    "rest": "45–60 s",
    "muscles": [
      "core",
      "hombros",
      "cuádriceps"
    ],
    "technique": "Rodillas cerca del suelo, espalda neutra y respiración controlada.",
    "commonMistakes": "Elevar demasiado cadera; hundir lumbar.",
    "progression": "Aumenta tiempo o añade desplazamiento.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 33,
    "name": "Puente de glúteos unilateral con pierna extendida",
    "image": "assets/exercises/033.jpg",
    "sourcePage": 33,
    "goals": [
      "glúteos",
      "piernas"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15 por lado",
    "rest": "45–60 s",
    "muscles": [
      "glúteo mayor",
      "isquiotibiales"
    ],
    "technique": "Empuja con talón y evita que la pelvis rote.",
    "commonMistakes": "Hiperextender lumbar; perder nivel de pelvis.",
    "progression": "Añade carga o pausa arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 34,
    "name": "Peso muerto con mancuernas",
    "image": "assets/exercises/034.jpg",
    "sourcePage": 34,
    "goals": [
      "piernas",
      "glúteos",
      "espalda"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12",
    "rest": "75–90 s",
    "muscles": [
      "glúteos",
      "isquiotibiales",
      "erectores"
    ],
    "technique": "Bisagra de cadera, mancuernas cerca de piernas y columna neutra.",
    "commonMistakes": "Redondear espalda; bajar por flexión lumbar.",
    "progression": "Aumenta carga progresivamente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 35,
    "name": "Peso muerto rumano unilateral con mancuerna",
    "image": "assets/exercises/035.jpg",
    "sourcePage": 35,
    "goals": [
      "glúteos",
      "piernas",
      "core"
    ],
    "level": "Intermedio",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "8–12 por lado",
    "rest": "75–90 s",
    "muscles": [
      "isquiotibiales",
      "glúteo mayor",
      "core"
    ],
    "technique": "Cadera se desplaza atrás y pelvis permanece alineada.",
    "commonMistakes": "Abrir la cadera; perder equilibrio; flexionar demasiado la rodilla.",
    "progression": "Aumenta carga o rango de movimiento.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 36,
    "name": "Circuito de core en silla",
    "image": "assets/exercises/036.jpg",
    "sourcePage": 36,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Silla",
    "sets": "2–3",
    "reps": "10–15 por movimiento",
    "rest": "45–60 s",
    "muscles": [
      "recto abdominal",
      "oblicuos"
    ],
    "technique": "Usa solo una silla estable y realiza cada movimiento lentamente.",
    "commonMistakes": "Silla inestable; impulso; contener la respiración.",
    "progression": "Añade una ronda antes de añadir resistencia.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 37,
    "name": "Sentadilla con mancuerna — postura amplia",
    "image": "assets/exercises/037.jpg",
    "sourcePage": 37,
    "goals": [
      "piernas",
      "glúteos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–90 s",
    "muscles": [
      "cuádriceps",
      "glúteos",
      "aductores"
    ],
    "technique": "Pies ligeramente abiertos y rodillas siguen la dirección de los pies.",
    "commonMistakes": "Colapsar rodillas; talones se despegan.",
    "progression": "Aumenta carga gradualmente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 38,
    "name": "Sentadilla con mancuerna — variante de cadera",
    "image": "assets/exercises/038.jpg",
    "sourcePage": 38,
    "goals": [
      "piernas",
      "glúteos"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–90 s",
    "muscles": [
      "glúteos",
      "cuádriceps"
    ],
    "technique": "Desciende con control y mantén tensión abdominal.",
    "commonMistakes": "Rebote abajo; perder postura.",
    "progression": "Añade carga o pausa.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 39,
    "name": "Step-up a plataforma",
    "image": "assets/exercises/039.jpg",
    "sourcePage": 39,
    "goals": [
      "piernas",
      "glúteos"
    ],
    "level": "Inicial",
    "equipment": "Banco/caja",
    "sets": "3",
    "reps": "8–12 por lado",
    "rest": "60–90 s",
    "muscles": [
      "glúteo mayor",
      "cuádriceps"
    ],
    "technique": "Apoya todo el pie sobre la plataforma y sube empujando con esa pierna.",
    "commonMistakes": "Impulsarse demasiado con la pierna de abajo; rodilla inestable.",
    "progression": "Aumenta altura o añade mancuernas.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 40,
    "name": "Step-up a plataforma — variante alta",
    "image": "assets/exercises/040.jpg",
    "sourcePage": 40,
    "goals": [
      "piernas",
      "glúteos"
    ],
    "level": "Intermedio",
    "equipment": "Banco/caja",
    "sets": "3",
    "reps": "8–10 por lado",
    "rest": "75–90 s",
    "muscles": [
      "glúteos",
      "cuádriceps"
    ],
    "technique": "Sube con control y evita inclinar excesivamente el tronco.",
    "commonMistakes": "Caer en el descenso; empujar con la pierna trasera.",
    "progression": "Añade carga solo cuando controles la altura.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 41,
    "name": "Step-up controlado",
    "image": "assets/exercises/041.jpg",
    "sourcePage": 41,
    "goals": [
      "piernas",
      "glúteos"
    ],
    "level": "Inicial",
    "equipment": "Banco/caja",
    "sets": "3",
    "reps": "10–12 por lado",
    "rest": "60–90 s",
    "muscles": [
      "glúteos",
      "cuádriceps"
    ],
    "technique": "Controla subida y especialmente la bajada; mantén rodilla alineada.",
    "commonMistakes": "Bajar de golpe; perder estabilidad.",
    "progression": "Añade mancuernas progresivamente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 42,
    "name": "Extensión de espalda/prone Y",
    "image": "assets/exercises/042.jpg",
    "sourcePage": 42,
    "goals": [
      "espalda",
      "hombros"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–15",
    "rest": "60 s",
    "muscles": [
      "deltoides posterior",
      "romboides",
      "erectores"
    ],
    "technique": "Levanta brazos con control sin hiperextender lumbar.",
    "commonMistakes": "Subir demasiado torso; encoger hombros.",
    "progression": "Añade pausa isométrica.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 43,
    "name": "Remo tumbado/prone row",
    "image": "assets/exercises/043.jpg",
    "sourcePage": 43,
    "goals": [
      "espalda",
      "hombros"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60–90 s",
    "muscles": [
      "dorsal",
      "romboides",
      "deltoides posterior"
    ],
    "technique": "Lleva codos hacia atrás y mantén pecho estable.",
    "commonMistakes": "Tirar con cuello; rebote.",
    "progression": "Aumenta carga gradualmente.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 44,
    "name": "Reverse fly tumbado — espalda alta",
    "image": "assets/exercises/044.jpg",
    "sourcePage": 44,
    "goals": [
      "espalda",
      "hombros"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "12–15",
    "rest": "60 s",
    "muscles": [
      "deltoides posterior",
      "romboides"
    ],
    "technique": "Abre los brazos sin despegar excesivamente el torso.",
    "commonMistakes": "Peso excesivo; impulso.",
    "progression": "Añade pausa arriba.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 45,
    "name": "Crunch con piernas elevadas y mancuerna",
    "image": "assets/exercises/045.jpg",
    "sourcePage": 45,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60 s",
    "muscles": [
      "recto abdominal"
    ],
    "technique": "Acerca costillas hacia pelvis y evita tirar del cuello.",
    "commonMistakes": "Usar brazos; bajar piernas sin control.",
    "progression": "Aumenta carga de forma conservadora.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 46,
    "name": "Toe touch con piernas elevadas y mancuerna",
    "image": "assets/exercises/046.jpg",
    "sourcePage": 46,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60 s",
    "muscles": [
      "recto abdominal",
      "flexores de cadera"
    ],
    "technique": "Alcanza hacia los pies mediante flexión del tronco controlada.",
    "commonMistakes": "Balancearse; tirar del cuello.",
    "progression": "Aumenta repeticiones antes que peso.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 47,
    "name": "Crunch alternado con piernas elevadas",
    "image": "assets/exercises/047.jpg",
    "sourcePage": 47,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Peso corporal",
    "sets": "3",
    "reps": "10–16 alternadas",
    "rest": "60 s",
    "muscles": [
      "recto abdominal",
      "oblicuos"
    ],
    "technique": "Alterna el alcance manteniendo piernas estables.",
    "commonMistakes": "Girar desde cuello; perder control.",
    "progression": "Añade resistencia ligera.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  },
  {
    "id": 48,
    "name": "Crunch con mancuerna y piernas elevadas",
    "image": "assets/exercises/048.jpg",
    "sourcePage": 48,
    "goals": [
      "abdomen",
      "core"
    ],
    "level": "Inicial",
    "equipment": "Mancuernas",
    "sets": "3",
    "reps": "10–15",
    "rest": "60 s",
    "muscles": [
      "recto abdominal",
      "oblicuos"
    ],
    "technique": "Mantén piernas arriba y flexiona el tronco sin impulso.",
    "commonMistakes": "Bajar piernas; tirar de cuello.",
    "progression": "Progresar con pausas y carga moderada.",
    "notes": "Clasificación y volumen objetivo propuestos por el coach a partir de la ejecución visible en la imagen. Ajustar si el vídeo completo muestra una variante distinta."
  }
];
