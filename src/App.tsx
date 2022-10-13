import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Trending from "./pages/trending/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
               <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/trending" element={<Trending/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
