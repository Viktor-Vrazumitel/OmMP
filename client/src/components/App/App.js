import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Signin from "../Signin/Signin";


function App() {
  return (
    <div className="App">
     <Layout />
     <Routes>
       <Route path='/signin' element={<Signin />}/>
     </Routes>
    </div>
  );
}

export default App;
