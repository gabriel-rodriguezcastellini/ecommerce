import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Welcome to our online store!" />
    </div>
  );
}

export default App;
//testing comment
