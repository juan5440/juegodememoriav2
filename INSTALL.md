# 🚀 Guía de Instalación Completa

Esta guía te llevará paso a paso por todo el proceso de instalación del **Juego de Memoria Bíblica** en diferentes sistemas operativos y configuraciones.

## 📋 Índice

- [Requisitos del Sistema](#requisitos-del-sistema)
- [Instalación Rápida](#instalación-rápida)
- [Instalación Paso a Paso](#instalación-paso-a-paso)
- [Instalación por Sistema Operativo](#instalación-por-sistema-operativo)
- [Configuración Avanzada](#configuración-avanzada)
- [Solución de Problemas](#solución-de-problemas)
- [Verificación de Instalación](#verificación-de-instalación)

## 📊 Requisitos del Sistema

### **Mínimos Requeridos**
- **CPU**: Procesador dual-core 1.0 GHz
- **RAM**: 2 GB de memoria
- **Almacenamiento**: 50 MB de espacio libre
- **Internet**: Conexión para descargar dependencias (solo instalación)
- **Navegador**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+

### **Recomendados**
- **CPU**: Procesador quad-core 2.0 GHz o superior
- **RAM**: 4 GB de memoria o más
- **Almacenamiento**: 100 MB de espacio libre
- **Internet**: Banda ancha para mejor experiencia de desarrollo
- **Navegador**: Última versión de Chrome, Firefox, Safari o Edge

### **Software Necesario**

#### **Para Desarrollo Completo:**
- ✅ **Node.js** 16.0.0 o superior
- ✅ **Yarn** 1.22.0 o superior (recomendado) o npm 7.0.0+
- ✅ **Git** 2.30.0 o superior (opcional, para clonar)

#### **Para Uso Simple:**
- ✅ Solo un navegador web moderno
- ✅ Los archivos del proyecto descargados

## ⚡ Instalación Rápida

### **Método 1: Desarrollo Completo (5 minutos)**

```bash
# 1. Clona el repositorio
git clone https://github.com/usuario/juego-memoria-biblica.git

# 2. Entra al directorio
cd juego-memoria-biblica

# 3. Instala dependencias
yarn install

# 4. Inicia el servidor
yarn run dev

# 5. Abre http://localhost:5173 en tu navegador
```

### **Método 2: Uso Inmediato (1 minuto)**

1. **Descarga** todos los archivos del proyecto
2. **Abre** `index.html` en tu navegador
3. **¡Listo!** Comienza a jugar inmediatamente

## 🔧 Instalación Paso a Paso

### **Paso 1: Preparar el Entorno**

#### **Instalar Node.js**

**Windows:**
1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (recomendada)
3. Ejecuta el instalador `.msi`
4. Sigue las instrucciones del wizard
5. Reinicia tu terminal/CMD

**macOS:**
```bash
# Usando Homebrew (recomendado)
brew install node

# O descarga desde nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
# Actualizar lista de paquetes
sudo apt update

# Instalar Node.js
sudo apt install nodejs npm

# Verificar instalación
node --version
npm --version
```

**Linux (CentOS/RHEL):**
```bash
# Instalar Node.js
sudo dnf install nodejs npm

# O usando yum en versiones más antiguas
sudo yum install nodejs npm
```

#### **Instalar Yarn (Recomendado)**

```bash
# Usando npm (después de instalar Node.js)
npm install -g yarn

# Verificar instalación
yarn --version
```

### **Paso 2: Obtener el Código**

#### **Opción A: Clonar con Git**
```bash
# Clona el repositorio
git clone https://github.com/usuario/juego-memoria-biblica.git

# Entra al directorio
cd juego-memoria-biblica
```

#### **Opción B: Descarga Directa**
1. Ve al repositorio en GitHub
2. Haz clic en "Code" → "Download ZIP"
3. Extrae el archivo ZIP
4. Abre terminal en la carpeta extraída

### **Paso 3: Instalar Dependencias**

```bash
# Con Yarn (recomendado)
yarn install

# O con npm
npm install
```

**¿Qué instala esto?**
- **Vite**: Servidor de desarrollo rápido
- **Herramientas de build**: Para optimización
- **Dev dependencies**: Solo para desarrollo

### **Paso 4: Iniciar el Juego**

```bash
# Iniciar servidor de desarrollo
yarn run dev

# O con npm
npm run dev
```

**Salida esperada:**
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.XXX:5173/
➜  press h to show help
```

### **Paso 5: Abrir en Navegador**

1. **Abre tu navegador favorito**
2. **Ve a** `http://localhost:5173`
3. **¡Disfruta del juego!**

## 💻 Instalación por Sistema Operativo

### **🪟 Windows**

#### **Método 1: Con PowerShell**
```powershell
# Abrir PowerShell como administrador
# Ejecutar paso a paso:

# Verificar si Node.js está instalado
node --version

# Si no está instalado, descarga desde nodejs.org
# Luego continúa:

git clone https://github.com/usuario/juego-memoria-biblica.git
cd juego-memoria-biblica
yarn install
yarn run dev
```

#### **Método 2: Con Git Bash**
```bash
# Instalar Git from git-scm.com
# Abrir Git Bash
# Seguir pasos normales de instalación
```

#### **Método 3: Sin Terminal**
1. **Instalar Node.js** desde [nodejs.org](https://nodejs.org/)
2. **Descargar ZIP** del proyecto desde GitHub
3. **Extraer** en una carpeta de tu elección
4. **Abrir CMD** en esa carpeta (Shift + Right Click → "Abrir ventana de comandos aquí")
5. **Ejecutar**: `yarn install` luego `yarn run dev`

### **🍎 macOS**

#### **Con Homebrew (Recomendado)**
```bash
# Instalar Homebrew si no lo tienes
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js
brew install node

# Instalar yarn
brew install yarn

# Clonar y ejecutar proyecto
git clone https://github.com/usuario/juego-memoria-biblica.git
cd juego-memoria-biblica
yarn install
yarn run dev
```

#### **Con Node.js Official**
```bash
# Descargar desde nodejs.org
# Instalar el paquete .pkg
# Continuar con pasos normales
```

### **🐧 Linux**

#### **Ubuntu/Debian**
```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js y npm
sudo apt install nodejs npm git -y

# Instalar yarn
npm install -g yarn

# Clonar proyecto
git clone https://github.com/usuario/juego-memoria-biblica.git
cd juego-memoria-biblica

# Instalar dependencias
yarn install

# Iniciar desarrollo
yarn run dev
```

#### **CentOS/RHEL/Fedora**
```bash
# CentOS/RHEL
sudo dnf install nodejs npm git -y

# O en versiones más antiguas
sudo yum install nodejs npm git -y

# Fedora
sudo dnf install nodejs npm git -y

# Continuar con pasos normales
npm install -g yarn
git clone https://github.com/usuario/juego-memoria-biblica.git
cd juego-memoria-biblica
yarn install
yarn run dev
```

#### **Arch Linux**
```bash
# Instalar dependencias
sudo pacman -S nodejs npm git

# Instalar yarn
sudo npm install -g yarn

# Continuar con instalación normal
```

## ⚙️ Configuración Avanzada

### **Variables de Entorno**

Crea un archivo `.env` si necesitas configuraciones personalizadas:

```bash
# .env
PORT=3000                    # Puerto personalizado
HOST=0.0.0.0                # Host para acceso remoto
OPEN=false                  # No abrir navegador automáticamente
```

### **Configuración de Vite**

Personaliza `vite.config.js` para necesidades específicas:

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
```

### **Scripts Personalizados**

Añade scripts adicionales a `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "dev-mobile": "vite --host 0.0.0.0",
    "build-analyze": "vite build --mode analyze"
  }
}
```

### **Configuración para Desarrollo Mobile**

Para probar en dispositivos móviles en tu red local:

```bash
# Iniciar servidor accesible desde toda la red
yarn run dev --host 0.0.0.0

# O agregar script personalizado
yarn run dev-mobile
```

Luego accede desde tu móvil usando la IP de tu computadora:
`http://192.168.1.XXX:5173`

## 🔧 Solución de Problemas

### **Problemas Comunes**

#### **❌ Error: "node no reconocido como comando"**
**Solución:**
```bash
# Windows: Reiniciar CMD/PowerShell después de instalar Node.js
# Linux/Mac: Cerrar y reabrir terminal
# Verificar instalación
node --version
```

#### **❌ Error: "puerto 5173 en uso"**
**Solución:**
```bash
# Terminar proceso en puerto 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5173 | xargs kill

# O usar puerto diferente
yarn run dev --port 3001
```

#### **❌ Error: "yarn no reconocido"**
**Solución:**
```bash
# Instalar yarn globalmente
npm install -g yarn

# O usar npm directamente
npm run dev
```

#### **❌ Error de permisos en Linux/Mac**
**Solución:**
```bash
# Cambiar owner del directorio npm
sudo chown -R $(whoami) ~/.npm

# O usar sudo para instalar yarn
sudo npm install -g yarn
```

#### **❌ Página en blanco al cargar**
**Solución:**
1. Verificar que el servidor esté corriendo
2. Limpiar cache del navegador (Ctrl+F5)
3. Verificar consola del navegador (F12)
4. Reiniciar servidor

#### **❌ Animaciones lentas o jerky**
**Solución:**
- Cerrar otras aplicaciones pesadas
- Usar navegador actualizado
- Desactivar extensiones innecesarias
- Verificar aceleración de hardware en browser

### **Logs de Debug**

Para diagnosticar problemas:

```bash
# Ejecutar con logs detallados
DEBUG=vite:* yarn run dev

# Verificar versiones
node --version
yarn --version
npm --version

# Verificar dependencias
yarn list
```

### **Reset Completo**

Si tienes problemas persistentes:

```bash
# Limpiar dependencias
rm -rf node_modules
rm yarn.lock

# Reinstalar
yarn install

# O con npm
rm package-lock.json
npm install
```

## ✅ Verificación de Instalación

### **Checklist de Funcionamiento**

#### **✅ Servidor Iniciado Correctamente**
```bash
# Deberías ver algo como:
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.XXX:5173/
```

#### **✅ Juego Carga sin Errores**
1. Abre `http://localhost:5173`
2. Ve el título "🙏 Juego de Memoria Bíblica"
3. Ve las estadísticas del juego (Nivel, Puntuación, etc.)
4. Ve las cartas del nivel 1

#### **✅ Funcionalidades Básicas**
- [ ] Las cartas se voltean al hacer clic
- [ ] Los pares se detectan correctamente
- [ ] La puntuación se actualiza
- [ ] Los modales se abren (botón "Niveles")
- [ ] El diseño es responsive (redimensiona ventana)

#### **✅ Rendimiento Óptimo**
- [ ] Animaciones suaves
- [ ] Sin lag al interactuar
- [ ] Carga rápida inicial
- [ ] Responsive en móviles

#### **✅ No Hay Errores en Consola**
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. No debería haber errores rojos
4. Solo mensajes informativos de Vite

### **Comandos de Verificación**

```bash
# Verificar que todo está instalado
node --version     # Debería mostrar v16.0.0 o superior
yarn --version     # Debería mostrar 1.22.0 o superior
git --version      # Debería mostrar versión instalada

# Verificar estructura del proyecto
ls -la             # Ver todos los archivos del proyecto
cat package.json   # Ver configuración del proyecto

# Verificar dependencias
yarn list          # Ver todas las dependencias instaladas
```

### **Testing en Múltiples Navegadores**

Prueba el juego en:
- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)  
- [ ] **Safari** (si estás en Mac)
- [ ] **Edge** (latest)
- [ ] **Navegador móvil** (Chrome Mobile, Safari Mobile)

### **Testing de Dispositivos**

Prueba el responsive design:
- [ ] **Desktop** (1920x1080 y superior)
- [ ] **Laptop** (1366x768)
- [ ] **Tablet** (768x1024)
- [ ] **Mobile** (375x667, 414x896)

## 🎯 Próximos Pasos

### **Después de la Instalación Exitosa**

1. **🎮 Juega todos los niveles** para familiarizarte
2. **📚 Lee la documentación** completa en README.md
3. **🔧 Explora el código** para entender la estructura
4. **🎨 Personaliza** colores o contenido según gustes
5. **🚀 Comparte** con amigos y familia

### **Para Desarrolladores**

1. **📖 Lee CONTRIBUTING.md** para pautas de contribución
2. **🔍 Explora la estructura** del código JavaScript
3. **🎨 Revisa los estilos** CSS para entender el diseño
4. **💡 Considera mejoras** que podrías hacer
5. **🤝 Únete a la comunidad** de contribuidores

### **Para Educadores**

1. **🎓 Úsalo en clases** de escuela dominical
2. **📋 Adapta el contenido** para tu congregación
3. **👥 Organiza competencias** entre estudiantes
4. **📝 Crea material** educativo complementario
5. **🤔 Sugiere mejoras** pedagógicas

---

## 🆘 Soporte y Ayuda

### **¿Necesitas Ayuda?**

Si después de seguir esta guía aún tienes problemas:

1. **🔍 Revisa la sección** [Solución de Problemas](#solución-de-problemas)
2. **💬 Abre un issue** en GitHub con:
   - Tu sistema operativo
   - Versiones de Node.js, yarn, navegador
   - Error exacto que recibes
   - Pasos que seguiste
3. **📧 Contacta** al equipo de desarrollo
4. **👥 Pregunta** en la comunidad

### **Recursos Adicionales**

- 📖 [Documentación de Node.js](https://nodejs.org/docs/)
- 📖 [Documentación de Yarn](https://yarnpkg.com/getting-started)
- 📖 [Documentación de Vite](https://vitejs.dev/guide/)
- 🐛 [Issues del Proyecto](https://github.com/usuario/juego-memoria-biblica/issues)

---

<div align="center">

**🎉 ¡Felicitaciones! Has instalado exitosamente el Juego de Memoria Bíblica 🎉**

*"Por tanto, esfuérzense por añadir a su fe, virtud; a su virtud, entendimiento"* - 2 Pedro 1:5

![Instalación Exitosa](https://img.shields.io/badge/Instalaci%C3%B3n-Exitosa-success?style=for-the-badge&logo=checkmarx&logoColor=white)

</div>
