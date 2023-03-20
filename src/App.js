
import { Routes, Route } from "react-router-dom";
import { Character } from "./components";
import { CharactersGallery } from "./components";
import { AuthPage } from "./Pages/AuthPage";
import { StartPage } from "./Pages/StartPage";
import PrivateRoute from "./Routes/PrivateRoute";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="login" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/characters" element={<CharactersGallery />} />
          <Route path="/characters/:id" element={<Character />} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  )

}

export default App;
