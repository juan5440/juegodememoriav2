# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al **Juego de Memoria Bíblica**! Esta guía te ayudará a empezar y asegurará que tus contribuciones sean útiles y bien recibidas.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Tipos de Contribuciones](#tipos-de-contribuciones)
- [Configuración del Entorno](#configuración-del-entorno)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Guías de Estilo](#guías-de-estilo)
- [Testing](#testing)
- [Documentación](#documentación)

## 🤝 Código de Conducta

### **Nuestros Valores**
- **Respeto**: Tratamos a todos con dignidad y respeto
- **Inclusividad**: Welcoming a todas las personas sin discriminación
- **Construcción**: Enfoque en mejoras constructivas
- **Educación**: Priorizamos el valor educativo y bíblico
- **Excelencia**: Buscamos calidad en código y experiencia

### **Comportamiento Esperado**
- ✅ Usa lenguaje welcoming e inclusivo
- ✅ Respeta diferentes puntos de vista y experiencias
- ✅ Acepta críticas constructivas graciosamente
- ✅ Enfócate en lo que es mejor para la comunidad
- ✅ Muestra empatía hacia otros miembros

### **Comportamiento Inaceptable**
- ❌ Lenguaje ofensivo, insultos o ataques personales
- ❌ Trolling, comentarios despectivos o harassment
- ❌ Contenido sexual o inapropiado para el contexto bíblico
- ❌ Spam o promoción no relacionada
- ❌ Cualquier forma de discriminación

## 🛠 Cómo Contribuir

### **1. Fork y Clone**
```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/juego-memoria-biblica.git
cd juego-memoria-biblica
```

### **2. Crea una Rama**
```bash
# Crea una rama para tu feature/fix
git checkout -b feature/nueva-caracteristica
# o
git checkout -b fix/corregir-bug
```

### **3. Realiza Cambios**
- Haz tus cambios siguiendo las guías de estilo
- Asegúrate de que el código funcione correctamente
- Prueba en múltiples navegadores y dispositivos

### **4. Commit y Push**
```bash
# Añade archivos modificados
git add .

# Commit con mensaje descriptivo
git commit -m "feat: añadir nueva característica X"

# Push a tu fork
git push origin feature/nueva-caracteristica
```

### **5. Crea Pull Request**
- Ve a GitHub y crea un Pull Request
- Describe claramente los cambios realizados
- Incluye screenshots si aplicable
- Menciona issues relacionados

## 🎯 Tipos de Contribuciones

### **🐛 Reportar Bugs**
**Antes de reportar:**
- Busca si el bug ya fue reportado
- Verifica que sea reproducible
- Asegúrate de usar la versión más reciente

**Al reportar incluye:**
- Descripción clara del problema
- Pasos para reproducir el bug
- Comportamiento esperado vs actual
- Screenshots/videos si es visual
- Información del browser/dispositivo

### **✨ Sugerir Features**
**Antes de sugerir:**
- Revisa si ya existe una solicitud similar
- Considera si encaja con el propósito educativo
- Piensa en la implementación y usabilidad

**Al sugerir incluye:**
- Descripción clara de la característica
- Justificación de por qué sería útil
- Posibles alternativas consideradas
- Mockups o ejemplos si aplicable

### **📝 Mejorar Documentación**
- Corrección de errores tipográficos
- Clarificación de instrucciones
- Traducción a otros idiomas
- Ejemplos adicionales
- Mejoras en README, guías, comentarios

### **🎨 Mejoras de Diseño**
- Optimizaciones de UI/UX
- Mejoras de accesibilidad
- Responsive design
- Animaciones y transiciones
- Esquemas de colores alternativos

### **📚 Contenido Bíblico**
- Nuevos niveles temáticos
- Personajes o historias adicionales
- Correcciones de contenido bíblico
- Referencias más precisas
- Traducciones de versículos

## ⚙️ Configuración del Entorno

### **Requisitos**
- Node.js 16+ y Yarn
- Git
- Editor de código (VS Code recomendado)
- Navegadores modernos para testing

### **Instalación**
```bash
# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn run dev

# El juego estará disponible en http://localhost:5173
```

### **Scripts Disponibles**
```bash
yarn run dev      # Servidor de desarrollo
yarn run build    # Build para producción
yarn run preview  # Preview del build
```

## 🔧 Proceso de Desarrollo

### **Flujo de Trabajo**
1. **Análisis**: Entiende el problema/feature completamente
2. **Planificación**: Define approach y cambios necesarios
3. **Implementación**: Desarrolla siguiendo estándares
4. **Testing**: Prueba exhaustivamente
5. **Documentación**: Actualiza docs si es necesario
6. **Review**: Auto-review antes de PR

### **Branches**
- **main**: Código estable de producción
- **develop**: Rama de desarrollo principal
- **feature/**: Nuevas características
- **fix/**: Corrección de bugs
- **docs/**: Mejoras de documentación

### **Commits**
Usa [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: añadir nuevo nivel de profetas
fix: corregir animación de cartas volteadas
docs: actualizar instrucciones de instalación
style: mejorar espaciado en cards
refactor: reorganizar lógica de puntuación
test: añadir tests para sistema de pares
```

## 📏 Estándares de Código

### **JavaScript**
```javascript
// ✅ Bueno: Variables descriptivas
const matchedPairsCount = 0;
const gameData = {};

// ❌ Malo: Variables poco claras
const mp = 0;
const data = {};

// ✅ Bueno: Funciones puras cuando sea posible
function calculateScore(attempts, hintsUsed) {
  return Math.max(0, 500 - (attempts * 10) - (hintsUsed * 50));
}

// ✅ Bueno: Comentarios JSDoc
/**
 * Voltea una carta y verifica si hace pareja
 * @param {HTMLElement} cardElement - Elemento DOM de la carta
 * @param {Object} card - Datos de la carta
 */
function flipCard(cardElement, card) {
  // ...
}
```

### **CSS**
```css
/* ✅ Bueno: Nombres de clases semánticas */
.memory-card {}
.game-board {}
.level-complete-modal {}

/* ✅ Bueno: Variables CSS */
:root {
  --primary-color: #667eea;
  --success-color: #4CAF50;
  --border-radius: 20px;
}

/* ✅ Bueno: Mobile-first */
.game-board {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .game-board {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### **HTML**
```html
<!-- ✅ Bueno: Estructura semántica -->
<main class="game-main">
  <section class="level-info">
    <h2 id="level-title">Nivel 1: Génesis</h2>
  </section>
</main>

<!-- ✅ Bueno: Accesibilidad -->
<button 
  id="hint-btn" 
  class="btn btn-secondary"
  aria-label="Mostrar pista para ayudar a encontrar parejas"
>
  💡 Pista
</button>
```

## 🎨 Guías de Estilo

### **Colores**
```css
/* Paleta principal */
--primary-blue: #667eea;
--primary-purple: #764ba2;
--success-green: #4CAF50;
--warning-red: #FF6B6B;
--background-light: #f8f9ff;

/* Usar siempre variables CSS */
background: var(--primary-blue);
```

### **Tipografía**
```css
/* Jerarquía clara */
h1 { font-size: 2.8rem; font-weight: 700; }
h2 { font-size: 2.2rem; font-weight: 600; }
h3 { font-size: 1.8rem; font-weight: 600; }
body { font-size: 1rem; line-height: 1.6; }
```

### **Espaciado**
```css
/* Sistema de espaciado consistente */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
```

### **Animaciones**
```css
/* Duración consistente */
--animation-fast: 0.2s;
--animation-normal: 0.3s;
--animation-slow: 0.5s;

/* Easing curves */
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## 🧪 Testing

### **Testing Manual**
**Devices a probar:**
- 📱 Móvil (iOS Safari, Android Chrome)
- 📱 Tablet (iPad, Android tablet)
- 💻 Desktop (Chrome, Firefox, Safari, Edge)

**Funcionalidades críticas:**
- ✅ Volteo de cartas funciona correctamente
- ✅ Detección de pares es precisa
- ✅ Puntuación se calcula bien
- ✅ Navegación entre niveles funciona
- ✅ Modales se abren/cierran correctamente
- ✅ Responsive design se ve bien
- ✅ Accesibilidad funciona (teclado, screen reader)

### **Checklist de Testing**
```markdown
- [ ] El juego carga sin errores en consola
- [ ] Las cartas se voltean suavemente
- [ ] Los pares correctos permanecen visibles
- [ ] La puntuación se actualiza en tiempo real
- [ ] Los modales funcionan correctamente
- [ ] El diseño responsive funciona en todos los tamaños
- [ ] La navegación por teclado funciona
- [ ] Los colores tienen suficiente contraste
- [ ] Las animaciones respetan prefers-reduced-motion
```

## 📖 Documentación

### **Comentarios en Código**
```javascript
// ✅ Bueno: Explica el "por qué", no el "qué"
// Usamos timeout para permitir que la animación termine antes de verificar
setTimeout(() => {
  this.checkMatch();
}, 1200);

// ✅ Bueno: Documenta parámetros y retorno
/**
 * Crea partículas de celebración cuando se encuentra un par
 * @param {HTMLElement} cardElement - Carta que muestra la celebración
 */
function createCelebrationEffect(cardElement) {
  // ...
}
```

### **README Updates**
Cuando añadas features significativos:
- Actualiza la sección de características
- Añade instrucciones si es necesario
- Actualiza screenshots/ejemplos
- Modifica la tabla de niveles si aplicable

### **Changelog**
Mantén actualizado CHANGELOG.md con:
- Features añadidos
- Bugs corregidos
- Cambios de API/breaking changes
- Mejoras de rendimiento

## 🎯 Áreas de Contribución Prioritarias

### **🔥 Alto Impacto**
1. **Mejoras de accesibilidad**
2. **Optimización de rendimiento**
3. **Corrección de bugs críticos**
4. **Contenido bíblico adicional**

### **🌟 Medio Impacto**
1. **Nuevas animaciones**
2. **Mejoras de UI/UX**
3. **Funcionalidades adicionales**
4. **Optimizaciones de código**

### **💡 Bajo Impacto**
1. **Refactoring de código**
2. **Mejoras de documentación**
3. **Tests adicionales**
4. **Optimizaciones menores**

## 🏆 Reconocimiento

### **Contribuidores Destacados**
Los contribuidores significativos serán:
- ⭐ Reconocidos en el README
- 🎯 Mencionados en releases
- 🏅 Incluidos en credits del juego
- 📝 Destacados en changelog

### **Tipos de Contribución**
- 💻 Código
- 🎨 Diseño
- 📖 Documentación
- 🐛 Bug reports
- 🤔 Ideas y feedback
- 📚 Contenido bíblico
- 🌍 Traducciones

## ❓ Preguntas Frecuentes

### **¿Puedo añadir niveles personalizados?**
¡Sí! Puedes crear nuevos niveles siguiendo la estructura en `gameData`. Asegúrate de que el contenido sea bíblicamente preciso.

### **¿Qué pasa si no sé mucho de programación?**
¡No hay problema! Puedes contribuir con:
- Reportar bugs
- Sugerir mejoras
- Revisar contenido bíblico
- Mejorar documentación
- Testing en diferentes dispositivos

### **¿Cómo aseguro que mi contribución sea aceptada?**
- Sigue las guías de este documento
- Haz cambios pequeños e incrementales
- Explica claramente el problema que resuelves
- Prueba exhaustivamente
- Sé paciente y receptivo al feedback

---

## 🙏 Agradecimientos

Gracias por considerar contribuir al Juego de Memoria Bíblica. Cada contribución, sin importar el tamaño, es valiosa y ayuda a hacer este proyecto mejor para toda la comunidad.

**¡Tu ayuda hace la diferencia en la educación bíblica digital!** 🙏✨

---

<div align="center">

**¿Tienes preguntas?**

No dudes en abrir un [issue](https://github.com/usuario/juego-memoria-biblica/issues) o contactar al equipo de desarrollo.

*"Como hierro con hierro se aguza, así el hombre aguza el rostro de su amigo."* - Proverbios 27:17

</div>
