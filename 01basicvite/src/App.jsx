// Equivalt to App.js from create-react-app
import Youtube from "./Youtube.jsx"

function App() {
  return (
  //  <h1>Vite React App </h1> 
   
   // In JsX we can only return one element, so here if we want 2 h1, we can no do it without making it under one div

    // <div>
    //   <h1>Vite React App</h1>
    //   <h1>Hello from code</h1>
    // </div>

    // This issue was later fixed, now we can just use <> </> instead of div as it does not create any extra div

     <>
      <h1>Vite React App</h1>
      <h1>Hello from code</h1>
      <Youtube /> 
    </>
  )
}

export default App
