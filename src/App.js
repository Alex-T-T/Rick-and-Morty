
import { Routes, Route } from "react-router-dom";
import { Character } from "./components";
import { CharactersGallery } from "./components";


function App() {

  return (
    <>
      <Routes>
        <Route path="/characters" element={<CharactersGallery />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  )

}

export default App;
