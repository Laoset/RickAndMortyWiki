import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards";
import Nav from "./components/NavBar/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  //parte del ejercicio form para crear base de datos login
  const username = "admin@gmail.com";
  const password = "admin";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //mi funcion para login
  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Datos incorrectos");
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    setCharacters((oldCharacters) =>
      oldCharacters.filter((char) => id !== char.id)
    );
  };
  return (
    <div>
      <div>
        {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      <div>{location.pathname === "/" ? null : <Footer />}</div>
    </div>
  );
}
export default App;
