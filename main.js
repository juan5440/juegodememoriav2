// Datos del juego - Historias y personajes bíblicos para cada nivel
const gameData = {
  1: {
    title: "Nivel 1: Personajes del Génesis",
    description: "Encuentra las parejas de personajes y sus historias",
    theme: "Génesis",
    pairs: [
      {
        character: { icon: "👨‍🦳", title: "Adán", description: "Primer hombre creado" },
        story: { icon: "🌳", title: "Jardín del Edén", description: "Paraíso terrenal" }
      },
      {
        character: { icon: "🚢", title: "Noé", description: "Constructor del arca" },
        story: { icon: "🌈", title: "El Diluvio", description: "40 días de lluvia" }
      },
      {
        character: { icon: "👴", title: "Abraham", description: "Padre de la fe" },
        story: { icon: "⭐", title: "Promesa Divina", description: "Descendencia como estrellas" }
      },
      {
        character: { icon: "💪", title: "José", description: "Hijo de Jacob" },
        story: { icon: "👕", title: "Túnica de Colores", description: "Regalo de su padre" }
      }
    ]
  },
  2: {
    title: "Nivel 2: Héroes del Éxodo",
    description: "Encuentra las parejas de libertadores y sus milagros",
    theme: "Éxodo",
    pairs: [
      {
        character: { icon: "🔥", title: "Moisés", description: "Libertador de Israel" },
        story: { icon: "🌊", title: "Mar Rojo", description: "Aguas divididas" }
      },
      {
        character: { icon: "👑", title: "Aarón", description: "Sumo sacerdote" },
        story: { icon: "🌸", title: "Vara Florecida", description: "Señal divina" }
      },
      {
        character: { icon: "⚡", title: "Josué", description: "Sucesor de Moisés" },
        story: { icon: "🏰", title: "Jericó", description: "Murallas caídas" }
      },
      {
        character: { icon: "👸", title: "Miriam", description: "Profetisa y hermana" },
        story: { icon: "🥁", title: "Canto de Victoria", description: "Celebración del triunfo" }
      },
      {
        character: { icon: "📜", title: "Los Diez Mandamientos", description: "Ley divina" },
        story: { icon: "⛰️", title: "Monte Sinaí", description: "Encuentro con Dios" }
      }
    ]
  },
  3: {
    title: "Nivel 3: Jueces de Israel",
    description: "Encuentra las parejas de jueces y sus victorias",
    theme: "Jueces",
    pairs: [
      {
        character: { icon: "💪", title: "Sansón", description: "El hombre fuerte" },
        story: { icon: "💇‍♂️", title: "Cabello Sagrado", description: "Fuente de su poder" }
      },
      {
        character: { icon: "👩‍⚖️", title: "Débora", description: "Jueza y profetisa" },
        story: { icon: "🌴", title: "Bajo la Palmera", description: "Lugar de juicio" }
      },
      {
        character: { icon: "🗡️", title: "Gedeón", description: "Guerrero valiente" },
        story: { icon: "🕯️", title: "300 Antorchas", description: "Victoria con pocos" }
      },
      {
        character: { icon: "🏺", title: "Jefté", description: "Juez y guerrero" },
        story: { icon: "🙏", title: "Voto Sagrado", description: "Promesa cumplida" }
      },
      {
        character: { icon: "👶", title: "Samuel", description: "Último juez" },
        story: { icon: "🛎️", title: "Voz de Dios", description: "Llamado divino" }
      },
      {
        character: { icon: "🦁", title: "Dalila", description: "Traicionó a Sansón" },
        story: { icon: "✂️", title: "Traición", description: "Cortó su cabello" }
      }
    ]
  },
  4: {
    title: "Nivel 4: Reyes de Israel",
    description: "Encuentra las parejas de reyes y sus reinados",
    theme: "Reyes",
    pairs: [
      {
        character: { icon: "👑", title: "Saúl", description: "Primer rey de Israel" },
        story: { icon: "🎵", title: "David y la Lira", description: "Música que calma" }
      },
      {
        character: { icon: "🎯", title: "David", description: "Rey según el corazón de Dios" },
        story: { icon: "🗿", title: "Goliat", description: "Gigante vencido" }
      },
      {
        character: { icon: "🏛️", title: "Salomón", description: "Rey sabio" },
        story: { icon: "⚖️", title: "Juicio Sabio", description: "Dos madres y un bebé" }
      },
      {
        character: { icon: "💔", title: "Roboam", description: "Reino dividido" },
        story: { icon: "⚡", title: "Cisma", description: "Israel se divide" }
      },
      {
        character: { icon: "🔥", title: "Acab", description: "Rey malvado" },
        story: { icon: "🌧️", title: "Sequía", description: "3 años sin lluvia" }
      },
      {
        character: { icon: "⚔️", title: "Josías", description: "Rey reformador" },
        story: { icon: "📖", title: "Libro Encontrado", description: "Reforma religiosa" }
      }
    ]
  },
  5: {
    title: "Nivel 5: Profetas de Dios",
    description: "Encuentra las parejas de profetas y sus mensajes",
    theme: "Profetas",
    pairs: [
      {
        character: { icon: "🔥", title: "Elías", description: "Profeta del fuego" },
        story: { icon: "🌪️", title: "Monte Carmelo", description: "Fuego del cielo" }
      },
      {
        character: { icon: "💨", title: "Eliseo", description: "Sucesor de Elías" },
        story: { icon: "🐻", title: "Osos del Bosque", description: "Castigo divino" }
      },
      {
        character: { icon: "🐋", title: "Jonás", description: "Profeta fugitivo" },
        story: { icon: "🏙️", title: "Nínive", description: "Ciudad que se arrepintió" }
      },
      {
        character: { icon: "👨‍⚕️", title: "Isaías", description: "Profeta mesiánico" },
        story: { icon: "👶", title: "Emanuel", description: "Dios con nosotros" }
      },
      {
        character: { icon: "😢", title: "Jeremías", description: "Profeta llorón" },
        story: { icon: "🏺", title: "Alfarero", description: "Vasija en las manos" }
      },
      {
        character: { icon: "👁️", title: "Ezequiel", description: "Profeta visionario" },
        story: { icon: "🦴", title: "Huesos Secos", description: "Valle de resurrección" }
      },
      {
        character: { icon: "🦁", title: "Daniel", description: "Profeta en Babilonia" },
        story: { icon: "🔥", title: "Horno de Fuego", description: "Tres amigos fieles" }
      }
    ]
  },
  6: {
    title: "Nivel 6: Mujeres de Fe",
    description: "Encuentra las parejas de mujeres valientes y sus historias",
    theme: "Mujeres",
    pairs: [
      {
        character: { icon: "👩‍🌾", title: "Rut", description: "Nuera fiel" },
        story: { icon: "🌾", title: "Campo de Booz", description: "Espigando en amor" }
      },
      {
        character: { icon: "👸", title: "Ester", description: "Reina valiente" },
        story: { icon: "👑", title: "Salvó a su Pueblo", description: "Para tiempo como este" }
      },
      {
        character: { icon: "👩‍👧", title: "Ana", description: "Madre de Samuel" },
        story: { icon: "🙏", title: "Oración Ferviente", description: "Pidió un hijo" }
      },
      {
        character: { icon: "🏺", title: "La Viuda", description: "De Sarepta" },
        story: { icon: "🍞", title: "Aceite y Harina", description: "Nunca se acabaron" }
      },
      {
        character: { icon: "⚔️", title: "Jael", description: "Heroína guerrera" },
        story: { icon: "⛺", title: "Tienda de Campaña", description: "Victoria inesperada" }
      },
      {
        character: { icon: "👩‍🦽", title: "Raquel", description: "Esposa amada" },
        story: { icon: "🐑", title: "Pastora", description: "Junto al pozo" }
      },
      {
        character: { icon: "🎯", title: "Abigail", description: "Mujer sabia" },
        story: { icon: "🍇", title: "Regalos a David", description: "Evitó una masacre" }
      },
      {
        character: { icon: "🏠", title: "Rahab", description: "La de Jericó" },
        story: { icon: "🔴", title: "Cordón Rojo", description: "Señal de salvación" }
      }
    ]
  },
  7: {
    title: "Nivel 7: Milagros de Jesús",
    description: "Encuentra las parejas de milagros y sus significados",
    theme: "Milagros",
    pairs: [
      {
        character: { icon: "🍞", title: "Multiplicación", description: "Panes y peces" },
        story: { icon: "👥", title: "5000 Personas", description: "Alimentadas con poco" }
      },
      {
        character: { icon: "🚶‍♂️", title: "Caminar", description: "Sobre las aguas" },
        story: { icon: "🌊", title: "Mar de Galilea", description: "Desafió las leyes" }
      },
      {
        character: { icon: "👨‍🦯", title: "Ciego de Nacimiento", description: "Sanado con barro" },
        story: { icon: "👁️", title: "Luz del Mundo", description: "Jesús da vista" }
      },
      {
        character: { icon: "⚰️", title: "Lázaro", description: "Resucitado" },
        story: { icon: "🔄", title: "Cuatro Días", description: "Vida después de muerte" }
      },
      {
        character: { icon: "🦵", title: "Paralítico", description: "Bajado del techo" },
        story: { icon: "🏠", title: "Casa Llena", description: "Fe de sus amigos" }
      },
      {
        character: { icon: "🍷", title: "Agua en Vino", description: "Primer milagro" },
        story: { icon: "💒", title: "Bodas de Caná", description: "Alegría restaurada" }
      },
      {
        character: { icon: "🌪️", title: "Tempestad", description: "Calmada" },
        story: { icon: "🛥️", title: "Barca en Peligro", description: "Paz en la tormenta" }
      },
      {
        character: { icon: "🩸", title: "Mujer", description: "Flujo de sangre" },
        story: { icon: "✋", title: "Tocó su Manto", description: "Fe que sana" }
      },
      {
        character: { icon: "👧", title: "Hija de Jairo", description: "Niña resucitada" },
        story: { icon: "😴", title: "No Está Muerta", description: "Solo duerme" }
      }
    ]
  },
  8: {
    title: "Nivel 8: Parábolas de Jesús",
    description: "Encuentra las parejas de parábolas y sus enseñanzas",
    theme: "Parábolas",
    pairs: [
      {
        character: { icon: "🌱", title: "Sembrador", description: "Tipos de terreno" },
        story: { icon: "💚", title: "Buena Tierra", description: "Corazón receptivo" }
      },
      {
        character: { icon: "🐑", title: "Oveja Perdida", description: "Una de cien" },
        story: { icon: "🎉", title: "Gran Gozo", description: "Por el arrepentido" }
      },
      {
        character: { icon: "👨‍👦", title: "Hijo Pródigo", description: "Regresó a casa" },
        story: { icon: "🤗", title: "Padre Amoroso", description: "Brazos abiertos" }
      },
      {
        character: { icon: "💰", title: "Buen Samaritano", description: "Ayudó al herido" },
        story: { icon: "🏥", title: "Compasión", description: "Amor al prójimo" }
      },
      {
        character: { icon: "🌰", title: "Grano de Mostaza", description: "Semilla pequeña" },
        story: { icon: "🌳", title: "Árbol Grande", description: "Reino que crece" }
      },
      {
        character: { icon: "👰", title: "Diez Vírgenes", description: "Bodas del cordero" },
        story: { icon: "🕯️", title: "Lámparas", description: "Estar preparados" }
      },
      {
        character: { icon: "💎", title: "Perla", description: "De gran precio" },
        story: { icon: "💲", title: "Vendió Todo", description: "Por el tesoro" }
      },
      {
        character: { icon: "🏗️", title: "Constructor", description: "Casa sobre roca" },
        story: { icon: "⛈️", title: "Tormenta", description: "Cimientos firmes" }
      },
      {
        character: { icon: "👨‍🌾", title: "Trabajadores", description: "De la viña" },
        story: { icon: "💰", title: "Mismo Salario", description: "Gracia divina" }
      },
      {
        character: { icon: "🦫", title: "Rico Insensato", description: "Acumuló tesoros" },
        story: { icon: "💀", title: "Esta Noche", description: "Vida temporal" }
      }
    ]
  },
  9: {
    title: "Nivel 9: Apóstoles de Cristo",
    description: "Encuentra las parejas de apóstoles y sus ministerios",
    theme: "Apóstoles",
    pairs: [
      {
        character: { icon: "🗝️", title: "Pedro", description: "Pescador de hombres" },
        story: { icon: "🐓", title: "Gallo Cantó", description: "Negación y perdón" }
      },
      {
        character: { icon: "⚡", title: "Santiago", description: "Hijo del trueno" },
        story: { icon: "⚔️", title: "Primer Mártir", description: "De los apóstoles" }
      },
      {
        character: { icon: "❤️", title: "Juan", description: "Discípulo amado" },
        story: { icon: "📖", title: "Apocalipsis", description: "Visión del fin" }
      },
      {
        character: { icon: "👤", title: "Andrés", description: "Hermano de Pedro" },
        story: { icon: "🎣", title: "Pescador", description: "Siguió primero" }
      },
      {
        character: { icon: "💰", title: "Mateo", description: "Cobrador de impuestos" },
        story: { icon: "📝", title: "Evangelio", description: "Escribió la historia" }
      },
      {
        character: { icon: "🔍", title: "Felipe", description: "Encontró a Natanael" },
        story: { icon: "🌍", title: "Griegos", description: "Querían ver a Jesús" }
      },
      {
        character: { icon: "🌿", title: "Bartolomé", description: "Sin engaño" },
        story: { icon: "🌳", title: "Higuera", description: "Jesús lo vio" }
      },
      {
        character: { icon: "👥", title: "Santiago", description: "Hijo de Alfeo" },
        story: { icon: "📚", title: "Epístola", description: "Fe con obras" }
      },
      {
        character: { icon: "💔", title: "Judas", description: "El traidor" },
        story: { icon: "💋", title: "Beso", description: "Señal de traición" }
      },
      {
        character: { icon: "❓", title: "Tomás", description: "El dudoso" },
        story: { icon: "✋", title: "Heridas", description: "Creyó al tocar" }
      },
      {
        character: { icon: "⚔️", title: "Pablo", description: "Apóstol a gentiles" },
        story: { icon: "💡", title: "Camino a Damasco", description: "Conversión radical" }
      }
    ]
  },
  10: {
    title: "Nivel 10: Momentos Finales",
    description: "Encuentra las parejas de eventos finales y su significado",
    theme: "Eventos Finales",
    pairs: [
      {
        character: { icon: "✝️", title: "Crucifixión", description: "Muerte de Jesús" },
        story: { icon: "🌑", title: "Tinieblas", description: "Sobre toda la tierra" }
      },
      {
        character: { icon: "🪦", title: "Sepulcro", description: "Tumba vacía" },
        story: { icon: "👼", title: "Ángeles", description: "No está aquí" }
      },
      {
        character: { icon: "🌅", title: "Resurrección", description: "Tercer día" },
        story: { icon: "👥", title: "Testigos", description: "Mujeres primero" }
      },
      {
        character: { icon: "☁️", title: "Ascensión", description: "Subió al cielo" },
        story: { icon: "👀", title: "Observando", description: "Hasta que se perdió" }
      },
      {
        character: { icon: "🔥", title: "Pentecostés", description: "Espíritu Santo" },
        story: { icon: "🗣️", title: "Lenguas", description: "Hablaron en idiomas" }
      },
      {
        character: { icon: "📖", title: "Evangelio", description: "Buenas nuevas" },
        story: { icon: "🌍", title: "Toda Criatura", description: "Predicad a todos" }
      },
      {
        character: { icon: "⛪", title: "Iglesia", description: "Cuerpo de Cristo" },
        story: { icon: "💒", title: "Comunión", description: "Unidos en amor" }
      },
      {
        character: { icon: "📜", title: "Apocalipsis", description: "Revelación final" },
        story: { icon: "👑", title: "Rey de Reyes", description: "Señor de señores" }
      },
      {
        character: { icon: "🌈", title: "Nueva Jerusalén", description: "Ciudad celestial" },
        story: { icon: "✨", title: "Vida Eterna", description: "Con Dios para siempre" }
      },
      {
        character: { icon: "⭐", title: "Segunda Venida", description: "Regreso glorioso" },
        story: { icon: "🎺", title: "Trompetas", description: "Anuncian su llegada" }
      },
      {
        character: { icon: "⚖️", title: "Juicio Final", description: "Justicia divina" },
        story: { icon: "📚", title: "Libros Abiertos", description: "Cada obra juzgada" }
      },
      {
        character: { icon: "🕊️", title: "Paz Eterna", description: "Sin más llanto" },
        story: { icon: "🏠", title: "Casa del Padre", description: "Muchas moradas" }
      }
    ]
  }
};

// Estado del juego
class BiblicalMemoryGame {
  constructor() {
    this.currentLevel = 1;
    this.score = 0;
    this.attempts = 0;
    this.pairsFound = 0;
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.gameCards = [];
    this.isPaused = false;
    this.hintsUsed = 0;
    this.completedLevels = new Set();
    
    this.initializeGame();
    this.setupEventListeners();
  }

  initializeGame() {
    this.updateUI();
    this.generateCards();
    this.shuffleCards();
    this.renderCards();
  }

  setupEventListeners() {
    document.getElementById('new-game-btn').addEventListener('click', () => {
      this.resetLevel();
    });

    document.getElementById('hint-btn').addEventListener('click', () => {
      this.showHint();
    });

    document.getElementById('pause-btn').addEventListener('click', () => {
      this.togglePause();
    });

    document.getElementById('levels-menu-btn').addEventListener('click', () => {
      this.showLevelsMenu();
    });

    document.getElementById('close-levels-btn').addEventListener('click', () => {
      this.closeModal('levels-modal');
    });

    document.getElementById('next-level-btn').addEventListener('click', () => {
      this.nextLevel();
    });

    document.getElementById('replay-btn').addEventListener('click', () => {
      this.resetLevel();
      this.closeModal('victory-modal');
    });

    document.getElementById('levels-from-victory-btn').addEventListener('click', () => {
      this.closeModal('victory-modal');
      this.showLevelsMenu();
    });

    document.getElementById('resume-btn').addEventListener('click', () => {
      this.togglePause();
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      this.resetLevel();
      this.closeModal('pause-modal');
    });

    document.getElementById('play-again-btn').addEventListener('click', () => {
      this.resetGame();
      this.closeModal('complete-modal');
    });

    document.getElementById('levels-from-complete-btn').addEventListener('click', () => {
      this.closeModal('complete-modal');
      this.showLevelsMenu();
    });
  }

  updateUI() {
    const levelData = gameData[this.currentLevel];
    document.getElementById('current-level').textContent = this.currentLevel;
    document.getElementById('score').textContent = this.score;
    document.getElementById('attempts').textContent = this.attempts;
    document.getElementById('pairs-found').textContent = this.pairsFound;
    document.getElementById('level-title').textContent = levelData.title;
    document.getElementById('level-description').textContent = levelData.description;
    
    // Actualizar clase del tablero para responsive
    const gameBoard = document.getElementById('game-board');
    gameBoard.className = `game-board level-${this.currentLevel}`;
  }

  generateCards() {
    const levelData = gameData[this.currentLevel];
    this.gameCards = [];
    
    levelData.pairs.forEach((pair, index) => {
      // Crear carta del personaje/concepto
      this.gameCards.push({
        id: `char-${index}`,
        pairId: index,
        type: 'character',
        icon: pair.character.icon,
        title: pair.character.title,
        description: pair.character.description,
        number: (index * 2) + 1
      });
      
      // Crear carta de la historia/lugar
      this.gameCards.push({
        id: `story-${index}`,
        pairId: index,
        type: 'story',
        icon: pair.story.icon,
        title: pair.story.title,
        description: pair.story.description,
        number: (index * 2) + 2
      });
    });
  }

  shuffleCards() {
    for (let i = this.gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.gameCards[i], this.gameCards[j]] = [this.gameCards[j], this.gameCards[i]];
    }
  }

  renderCards() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    
    this.gameCards.forEach((card, index) => {
      const cardElement = this.createCardElement(card, index);
      gameBoard.appendChild(cardElement);
    });
  }

  createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'memory-card';
    cardDiv.dataset.cardId = card.id;
    cardDiv.dataset.pairId = card.pairId;
    cardDiv.setAttribute('tabindex', '0');
    
    cardDiv.innerHTML = `
      <div class="card-back">
        <div class="card-number">${card.number}</div>
        <div class="card-icon">📖</div>
        <div class="card-title">?</div>
      </div>
      <div class="card-front">
        <div class="card-number">${card.number}</div>
        <div class="card-icon">${card.icon}</div>
        <div class="card-title">${card.title}</div>
        <div class="card-description">${card.description}</div>
      </div>
    `;
    
    const handleCardClick = () => {
      if (!this.isPaused) {
        this.flipCard(cardDiv, card);
      }
    };

    cardDiv.addEventListener('click', handleCardClick);
    cardDiv.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardClick();
      }
    });
    
    return cardDiv;
  }

  flipCard(cardElement, card) {
    // No permitir voltear si ya está volteada o emparejada
    if (cardElement.classList.contains('flipped') || 
        cardElement.classList.contains('matched') ||
        this.flippedCards.length >= 2) {
      return;
    }

    // Voltear la carta
    cardElement.classList.add('flipped');
    this.flippedCards.push({ element: cardElement, card: card });

    // Si hay dos cartas volteadas, verificar si hacen pareja
    if (this.flippedCards.length === 2) {
      this.attempts++;
      this.updateUI();
      
      setTimeout(() => {
        this.checkMatch();
      }, 1200);
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    
    if (card1.card.pairId === card2.card.pairId) {
      // ¡Pareja encontrada!
      // Mantener las cartas volteadas y agregar la clase matched
      card1.element.classList.add('matched');
      card2.element.classList.add('matched');
      
      // Asegurar que las cartas permanezcan volteadas para mostrar su contenido
      card1.element.classList.add('permanently-flipped');
      card2.element.classList.add('permanently-flipped');
      
      this.matchedPairs++;
      this.pairsFound++;
      this.score += 150;
      
      // Bonus por eficiencia
      if (this.attempts <= this.gameCards.length / 2) {
        this.score += 100;
      }
      
      // Efecto visual especial para pares encontrados
      this.animateMatchedPair(card1.element, card2.element);
      
      this.updateUI();
      
      // Verificar si el nivel está completo
      if (this.matchedPairs === gameData[this.currentLevel].pairs.length) {
        this.completedLevels.add(this.currentLevel);
        setTimeout(() => {
          this.levelComplete();
        }, 800);
      }
    } else {
      // No hacen pareja, voltear de nuevo después de un momento
      setTimeout(() => {
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
      }, 600);
    }
    
    // Limpiar las cartas volteadas
    this.flippedCards = [];
  }

  animateMatchedPair(card1, card2) {
    // Agregar animación de celebración
    card1.style.animation = 'matchSuccess 0.8s ease-in-out';
    card2.style.animation = 'matchSuccess 0.8s ease-in-out';
    
    // Crear efecto de partículas simples
    this.createCelebrationEffect(card1);
    this.createCelebrationEffect(card2);
    
    // Quitar la animación después de que termine
    setTimeout(() => {
      card1.style.animation = '';
      card2.style.animation = '';
    }, 800);
  }

  createCelebrationEffect(cardElement) {
    const rect = cardElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Crear múltiples partículas
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'celebration-particle';
      particle.textContent = '✨';
      particle.style.position = 'fixed';
      particle.style.left = centerX + 'px';
      particle.style.top = centerY + 'px';
      particle.style.fontSize = '1.5rem';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.transition = 'all 1s ease-out';
      
      document.body.appendChild(particle);
      
      // Animar la partícula
      setTimeout(() => {
        const angle = (i * 60) * Math.PI / 180;
        const distance = 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = '0';
        particle.style.fontSize = '0.5rem';
      }, 50);
      
      // Remover la partícula
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 1100);
    }
  }

  showHint() {
    if (this.hintsUsed >= 3) {
      alert('Has usado todas las pistas disponibles para este nivel.');
      return;
    }

    // Encontrar una carta no emparejada
    const unmatchedCards = this.gameCards.filter(card => {
      const element = document.querySelector(`[data-card-id="${card.id}"]`);
      return !element.classList.contains('matched') && !element.classList.contains('flipped');
    });

    if (unmatchedCards.length > 0) {
      const randomCard = unmatchedCards[Math.floor(Math.random() * unmatchedCards.length)];
      const cardElement = document.querySelector(`[data-card-id="${randomCard.id}"]`);
      
      // Mostrar brevemente la carta
      cardElement.classList.add('flipped');
      cardElement.classList.add('hint-card');
      this.hintsUsed++;
      this.score = Math.max(0, this.score - 50); // Penalizar por usar pista
      this.updateUI();
      
      setTimeout(() => {
        if (!cardElement.classList.contains('matched')) {
          cardElement.classList.remove('flipped');
        }
        cardElement.classList.remove('hint-card');
      }, 2500);
    }
  }

  showLevelsMenu() {
    this.renderLevelsGrid();
    this.showModal('levels-modal');
  }

  renderLevelsGrid() {
    const levelsGrid = document.getElementById('levels-grid');
    levelsGrid.innerHTML = '';

    for (let level = 1; level <= 10; level++) {
      const levelData = gameData[level];
      const levelCard = document.createElement('div');
      levelCard.className = 'level-card';
      
      if (this.completedLevels.has(level)) {
        levelCard.classList.add('completed');
      }
      if (level === this.currentLevel) {
        levelCard.classList.add('current');
      }
      
      levelCard.innerHTML = `
        <div class="level-number">${level}</div>
        <div class="level-name">${levelData.title.split(': ')[1]}</div>
        <div class="level-theme">${levelData.theme}</div>
      `;
      
      levelCard.addEventListener('click', () => {
        this.currentLevel = level;
        this.resetLevel();
        this.closeModal('levels-modal');
      });
      
      levelsGrid.appendChild(levelCard);
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.showModal('pause-modal');
    } else {
      this.closeModal('pause-modal');
    }
  }

  levelComplete() {
    const bonusScore = Math.max(0, 300 - (this.attempts * 15));
    this.score += bonusScore;
    
    document.getElementById('victory-message').textContent = 
      `¡Has completado el ${gameData[this.currentLevel].title}!`;
    
    document.getElementById('victory-attempts').textContent = this.attempts;
    document.getElementById('victory-points').textContent = this.score;
    document.getElementById('victory-bonus').textContent = bonusScore;
    
    // Ocultar botón de siguiente nivel si es el último nivel
    const nextBtn = document.getElementById('next-level-btn');
    if (this.currentLevel >= 10) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'inline-block';
    }
    
    this.showModal('victory-modal');
  }

  nextLevel() {
    this.closeModal('victory-modal');
    
    if (this.currentLevel < 10) {
      this.currentLevel++;
      this.resetLevel();
    } else {
      this.gameComplete();
    }
  }

  resetLevel() {
    this.attempts = 0;
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.gameCards = [];
    this.hintsUsed = 0;
    this.pairsFound = 0;
    this.initializeGame();
  }

  resetGame() {
    this.currentLevel = 1;
    this.score = 0;
    this.completedLevels.clear();
    this.resetLevel();
    this.closeAllModals();
  }

  gameComplete() {
    document.getElementById('final-score').textContent = this.score;
    this.showModal('complete-modal');
  }

  showModal(modalId) {
    document.getElementById(modalId).classList.add('show');
  }

  closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
  }

  closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.remove('show'));
  }
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  new BiblicalMemoryGame();
});
