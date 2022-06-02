import Admin from "./Midterm1/Admin/Admin";
import Content from "./Midterm1/Content";
import FormAdmin from "./Midterm1/Admin/FormAdmin";
import Header from "./Midterm1/header";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      {<Header/>}
        <Routes>
          <Route path="/" element={<Content />}/>
          <Route path="admin/add" element={<FormAdmin />}/>
          <Route path = "admin/update/:id" element={<FormAdmin/>}/>
          <Route path = "admin" element={<Admin/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
