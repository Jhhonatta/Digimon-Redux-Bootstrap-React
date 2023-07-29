import "./App.css";
import Search from "./components/Search/index.jsx";
import DigimonList from "./components/DigimonList";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
  const { digimons } = useSelector((state) => state);
  return (
    <>
      <Search />
      {digimons.length > 2 ? <DigimonList /> : <Loading />}
    </>
  );
}

export default App;
