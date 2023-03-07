// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Character } from "./";
import { CharactersGallery } from "./";


// const CharactersGallery = lazy(() => import('./CharactersGallery/CharactersGallery'))

function App() {

return (
  <>
    <Routes>
      <Route path="/characters" element={<CharactersGallery />} />
      <Route path="/character/:id" element={<Character />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </>
)

}

export default App;
