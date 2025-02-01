# 💧 Water Jug Solver - Frontend

Este es el frontend de la aplicación **Water Jug Solver**, que permite a los usuarios ingresar capacidades de jarras de agua y un objetivo para encontrar una solución al problema de las jarras de agua. Se conecta con un backend en Node.js y Express para obtener la solución.

## 🚀 Características

- Interfaz intuitiva para ingresar valores de las jarras y el objetivo.
- Botón para resolver el problema y ver los pasos detallados.
- Muestra mensajes de error si no hay solución o si hay problemas con la conexión al servidor.

## 📦 Instalación

1. Clonar el repositorio:

   git clone https://github.com/Patobenitez25/Chicks-gold---Bucket-UI.git
   cd frontend

2.Instalar dependencias:
  npm install
  
3.Configurar la URL del backend (en .env si usas un archivo de configuración, o directamente en fetch dentro del código).

4.Iniciar la aplicación:

  npm run dev

La aplicación estará disponible en http://localhost:5173 (o el puerto que indique Vite), o en https://chicks-gold-bucket-ui.vercel.app/.

 🚀 Componente principal:
   El componente principal (WaterJugApp.jsx) maneja la entrada del usuario,
   envía una solicitud al backend y muestra los pasos de la solución de manera clara.
   
🛠️ Tecnologías utilizadas
  React (Vite)
  CSS puro para los estilos
  Fetch API para la comunicación con el backend
📡 Conexión con el backend
  El frontend se comunica con el backend a través de una API REST en http://localhost:3001/solve. Asegúrate de que el backend esté corriendo antes de probar la aplicación.

📝 Patricio Joaquin Benitez
