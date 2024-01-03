import pokemon from "./assets/pokemon-src.png";
import "./App.css";
function App() {
  return (
    <>
      <h1>img in public</h1>
      <img src="/mario-public.png"></img>
      <h1>img in src</h1>
      <img src={pokemon}></img>
    </>
  );
}

export default App;
