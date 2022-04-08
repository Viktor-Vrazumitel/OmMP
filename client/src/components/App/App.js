import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../Page/Page";
import Signin from "../Signin/Signin";


function App() {
  return (
    <div className="App">
     <Layout />
     <Routes>
       <Route path='/signin' element={<Signin />}/>
       <Route path='/' element={<MainPage />}/>

     </Routes>
    </div>
  );
}

export default App;
