import "./App.css";
import Search from "./components/Search/index.jsx";
import DigimonList from "./components/DigimonList";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import BackgroundContainer from "./style";

function App() {
  const { digimons } = useSelector((state) => state);
  return (
    <>
      <BackgroundContainer fluid className="m-0 min-vh-100">
        <Search />
        {digimons.length > 2 ? <DigimonList /> : <Loading />}
      </BackgroundContainer>
    </>
  );
}

export default App;
