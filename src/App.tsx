import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
               <Routes>
            <Route path="/" element={<Home/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
