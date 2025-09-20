# 🙏 Juego de Memoria Bíblica

Un hermoso y educativo juego de memoria basado en historias y personajes bíblicos, diseñado para aprender mientras te diviertes. Cuenta con 10 niveles progresivos, cada uno centrado en diferentes temas bíblicos.

![Juego de Memoria Bíblica](https://img.shields.io/badge/Juego-Memoria%20B%C3%ADblica-blue?style=for-the-badge&logo=book&logoColor=white)
![Tecnología](https://img.shields.io/badge/Tecnolog%C3%ADa-Vanilla%20JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Completo-success?style=for-the-badge)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Niveles del Juego](#-niveles-del-juego)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

## ✨ Características

### 🎮 **Jugabilidad**
- **10 niveles temáticos** progresivos con dificultad creciente
- **Sistema de pares** con personajes bíblicos e historias relacionadas
- **Iconos representativos** para cada personaje y evento bíblico
- **Mecánica de memoria** tradicional con mejoras modernas
- **Pares que se mantienen visibles** una vez encontrados

### 🎨 **Interfaz y Diseño**
- **Diseño responsive** que se adapta a móviles, tablets y escritorio
- **Animaciones suaves** y efectos visuales atractivos
- **Paleta de colores** inspirada en temas espirituales
- **Iconos y emojis** que facilitan la identificación visual
- **Efectos de partículas** al encontrar pares correctos

### 🏆 **Sistema de Puntuación**
- **Puntuación dinámica** basada en eficiencia
- **Sistema de bonificaciones** por completar niveles rápidamente
- **Penalizaciones por usar pistas** (máximo 3 por nivel)
- **Estadísticas detalladas** de rendimiento

### 🔧 **Funcionalidades Avanzadas**
- **Sistema de pistas** para ayudar cuando te atores
- **Función de pausa** para interrumpir el juego
- **Navegación libre** entre niveles desbloqueados
- **Progreso persistente** visual de niveles completados

## 🚀 Instalación

### **Requisitos Previos**
- **Node.js** (versión 16 o superior)
- **Yarn** como gestor de paquetes
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### **Pasos de Instalación**

#### **Opción 1: Instalación Completa (Recomendada)**

1. **Clona o descarga el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd juego-memoria-biblica
   ```

2. **Instala las dependencias**
   ```bash
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   yarn run dev
   ```

4. **Abre tu navegador**
   - Visita `http://localhost:5173` (o la URL que muestre en la terminal)
   - ¡Comienza a jugar!

#### **Opción 2: Instalación Rápida (Sin Node.js)**
Si solo quieres ejecutar el juego sin servidor de desarrollo:

1. Descarga todos los archivos del proyecto
2. Abre `index.html` directamente en tu navegador
3. ¡Listo para jugar!

### **Comandos Disponibles**

```bash
# Iniciar servidor de desarrollo
yarn run dev

# Construir para producción
yarn run build

# Vista previa de producción
yarn run preview
```

## 🎯 Uso

### **Cómo Jugar**

1. **Objetivo**: Encuentra todas las parejas de cartas relacionadas en cada nivel
2. **Mecánica**: 
   - Haz clic en una carta para voltearla
   - Haz clic en otra carta para buscar su pareja
   - Si coinciden, se quedarán visibles en color verde permanentemente
   - Si no coinciden, se voltearán de nuevo

3. **Controles Disponibles**:
   - **📋 Niveles**: Accede al menú de selección de niveles
   - **🔄 Reiniciar**: Reinicia el nivel actual
   - **💡 Pista**: Muestra brevemente una carta (máximo 3 por nivel)
   - **⏸️ Pausa**: Pausa/reanuda el juego

### **Navegación**
- **Menú de Niveles**: Puedes navegar libremente entre niveles desbloqueados
- **Progreso Visual**: Los niveles completados se muestran en verde
- **Nivel Actual**: Se destaca en rojo en el menú

### **Sistema de Puntuación**
- **Pareja correcta**: +150 puntos
- **Bonus por eficiencia**: +100 puntos (si usas pocos intentos)
- **Bonus de nivel**: +300 puntos base menos penalizaciones
- **Uso de pista**: -50 puntos por cada pista utilizada

## 📚 Niveles del Juego

| Nivel | Tema | Descripción | Pares |
|-------|------|-------------|-------|
| 1 | **Génesis** | Personajes fundacionales | 4 |
| 2 | **Éxodo** | Héroes libertadores | 5 |
| 3 | **Jueces** | Líderes de Israel | 6 |
| 4 | **Reyes** | Monarcas históricos | 6 |
| 5 | **Profetas** | Mensajeros de Dios | 7 |
| 6 | **Mujeres de Fe** | Heroínas bíblicas | 8 |
| 7 | **Milagros de Jesús** | Obras sobrenaturales | 9 |
| 8 | **Parábolas** | Enseñanzas de Cristo | 10 |
| 9 | **Apóstoles** | Discípulos y misioneros | 11 |
| 10 | **Eventos Finales** | Momentos cruciales | 12 |

### **Ejemplos de Pares por Nivel**

#### **Nivel 1: Génesis**
- 👨‍🦳 Adán ↔ 🌳 Jardín del Edén
- 🚢 Noé ↔ 🌈 El Diluvio
- 👴 Abraham ↔ ⭐ Promesa Divina
- 💪 José ↔ 👕 Túnica de Colores

#### **Nivel 7: Milagros de Jesús**
- 🍞 Multiplicación ↔ 👥 5000 Personas
- 🚶‍♂️ Caminar ↔ 🌊 Sobre las Aguas
- ⚰️ Lázaro ↔ 🔄 Resucitado
- 🍷 Agua en Vino ↔ 💒 Bodas de Caná

## 🛠 Tecnologías Utilizadas

### **Frontend**
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**: Estructura semántica
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3**: Estilos modernos con Grid y Flexbox
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript ES6+**: Lógica del juego

### **Herramientas de Desarrollo**
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite**: Servidor de desarrollo rápido
- ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white) **Yarn**: Gestor de paquetes

### **Características Técnicas**
- **Responsive Design**: Compatible con todos los dispositivos
- **CSS Grid y Flexbox**: Layout moderno y flexible
- **ES6 Modules**: Código modular y mantenible
- **CSS Custom Properties**: Variables CSS para temas
- **Accessibility**: Navegación por teclado y screen readers

## 📁 Estructura del Proyecto

```
juego-memoria-biblica/
├── 📄 index.html          # Página principal del juego
├── 🎨 style.css           # Estilos y diseño responsivo
├── ⚙️ main.js             # Lógica principal del juego
├── 📦 package.json        # Configuración y dependencias
├── 🔧 yarn.lock          # Lockfile de dependencias
├── 📚 README.md          # Documentación principal
├── 📋 CHANGELOG.md       # Historial de cambios
├── 🤝 CONTRIBUTING.md    # Guía para contribuidores
└── 📜 LICENSE            # Licencia del proyecto
```

### **Descripción de Archivos**

- **`index.html`**: Contiene la estructura HTML completa del juego con todos los modales y elementos de interfaz
- **`style.css`**: Todos los estilos CSS incluyendo animaciones, diseño responsive y efectos visuales
- **`main.js`**: Lógica completa del juego usando JavaScript vanilla con programación orientada a objetos
- **`package.json`**: Configuración del proyecto con scripts de desarrollo y dependencias

## 🎮 Funcionalidades

### **Mecánicas del Juego**
- ✅ Sistema de volteo de cartas con animaciones suaves
- ✅ Detección automática de pares correctos
- ✅ Pares encontrados permanecen visibles en verde
- ✅ Efectos de partículas al encontrar pares
- ✅ Sistema de puntuación dinámico
- ✅ Contador de intentos y estadísticas

### **Interfaz de Usuario**
- ✅ Menú de selección de niveles
- ✅ Modales informativos (victoria, pausa, completado)
- ✅ Controles de juego (pistas, pausa, reiniciar)
- ✅ Estadísticas en tiempo real
- ✅ Diseño responsive para todos los dispositivos

### **Accesibilidad**
- ✅ Navegación por teclado (Tab, Enter, Espacio)
- ✅ Soporte para lectores de pantalla
- ✅ Colores con alto contraste
- ✅ Textos descriptivos para iconos
- ✅ Respeta preferencias de movimiento reducido

## 📸 Capturas de Pantalla

### **Pantalla Principal**
- Interfaz elegante con gradientes bíblicos
- Estadísticas del juego claramente visibles
- Cartas con iconos representativos de personajes bíblicos

### **Juego en Acción**
- Cartas volteadas mostrando personajes y sus historias
- Pares encontrados permanecen visibles en verde
- Efectos de partículas celebrando los aciertos

### **Menú de Niveles**
- Vista de todos los 10 niveles disponibles
- Indicadores visuales de progreso
- Temas bíblicos claramente organizados

### **Modal de Victoria**
- Celebración con estadísticas detalladas
- Opciones para continuar o repetir nivel
- Diseño motivacional y encouraging

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el Juego de Memoria Bíblica:

### **Cómo Contribuir**

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/NuevaCaracteristica`)
5. **Abre un Pull Request**

### **Tipos de Contribuciones**
- 🐛 **Reportar bugs** o problemas encontrados
- ✨ **Sugerir nuevas características** o mejoras
- 📝 **Mejorar documentación** o traducciones
- 🎨 **Mejorar el diseño** o experiencia de usuario
- 📚 **Añadir más contenido bíblico** o niveles

### **Pautas de Contribución**
- Mantén el código limpio y comentado
- Sigue las convenciones de nomenclatura existentes
- Asegúrate de que el código sea responsive
- Prueba en múltiples navegadores
- Respeta el tema bíblico y educativo del juego

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

### **Términos de Uso**
- ✅ Uso comercial permitido
- ✅ Modificación permitida
- ✅ Distribución permitida
- ✅ Uso privado permitido
- ⚠️ Sin garantía
- ⚠️ Sin responsabilidad

## 📞 Contacto

### **Desarrollador**
- **Nombre**: Dualite Alpha
- **Especialidad**: Frontend Development & UI/UX Design
- **Tecnologías**: HTML, CSS, JavaScript, Design Systems

### **Soporte**
¿Tienes preguntas o necesitas ayuda?
- 🐛 **Reportar bugs**: Crea un issue en el repositorio
- 💡 **Sugerencias**: Abre una discusión en GitHub
- 📧 **Contacto directo**: A través de los canales oficiales de Dualite

### **Comunidad**
- 🌟 **Dualite Showcase**: Comparte tu experiencia jugando
- 🚀 **Netlify Deploy**: Publica tu propia versión
- 📱 **Comparte**: Ayuda a otros a aprender la Biblia jugando

---

## 🎯 Próximos Pasos Sugeridos

### **Para Usuarios**
1. **🎮 Juega todos los niveles** y domina las historias bíblicas
2. **🔗 Conecta Supabase** para guardar tu progreso y puntuaciones
3. **🚀 Publica en Netlify** usando el botón "Publish"
4. **🏆 Comparte en Dualite Showcase** para mostrar tu puntuación

### **Para Desarrolladores**
1. **📊 Añadir analytics** para seguimiento de uso
2. **🔊 Integrar sonidos** para mejor experiencia
3. **🌍 Crear versiones** en otros idiomas
4. **📱 Desarrollar app móvil** nativa

---

<div align="center">

**🙏 ¡Gracias por jugar y aprender con el Juego de Memoria Bíblica! 🙏**

*"Lámpara es a mis pies tu palabra, y lumbrera a mi camino."* - Salmos 119:105

![Hecho con ❤️](https://img.shields.io/badge/Hecho%20con-❤️-red?style=for-the-badge)
![Para la Gloria de Dios](https://img.shields.io/badge/Para%20la%20Gloria-de%20Dios-gold?style=for-the-badge)

</div>
