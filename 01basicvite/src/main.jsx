// Equivalent to index.js from create-react-app

import { StrictMode } from 'react' // We can import React from "react" but it is already destructured so that it can directly be used
import { createRoot } from 'react-dom/client' // Similar to above we can import ReactDOM from "react-dom/client" but this specific function of createRoot is destructured so that it can be used directly
import App from './App.jsx'
import Youtube from "./Youtube.jsx"

createRoot(document.getElementById('root')).render(
  
    <App />

)
