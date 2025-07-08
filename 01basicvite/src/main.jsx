// Equivalent to index.js from create-react-app

import { StrictMode } from 'react' // We can import React from "react" but it is already destructured so that it can directly be used
import { createRoot } from 'react-dom/client' // Similar to above we can import ReactDOM from "react-dom/client" but this specific function of createRoot is destructured so that it can be used directly
import App from './App.jsx'
import Youtube from "./Youtube.jsx"

const reactElement = {
  type: "a", // tag like <a>, or <h1>
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
    return (
      <>
        <h1>Custom React App</h1> 
    	</>
    )
}

const AnotherElement = (
	<a href = "https://google.com" target = "_blank">Visit Google</a>
)


createRoot(document.getElementById('root')).render(
  
    // <App />
		 AnotherElement
)
