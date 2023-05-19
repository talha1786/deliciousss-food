
import Categorys from "./components/Categorys";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from 'react-router-dom'
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pt-16 pb-8 flex justify-start items-center">
          <GiKnifeFork className="text-[2rem]"/>
          <Link className="no-underline text-2xl font-[400] font-Lobster" to={"/"}>deliciousss</Link>
        </div>
        <Search/>
       <Categorys />
        <Pages />
        </BrowserRouter>
      </div>
  );
}

export default App;
