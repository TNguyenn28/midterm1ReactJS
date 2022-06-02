import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import swal from "sweetalert";
const Admin = () => {
  const [data, setData] = useState([]);
  const [onloading, setOnLoading] = useState(false)
  
  const getData = () => {
    axios.get("http://localhost:3000/news").then((res) => {
      setData(res.data);
      setOnLoading(true);
    });
  };

  const deteleItem = (id) => {
    axios.delete(`http://localhost:3000/news/${id}`).then(() =>{
      swal({
        title: "Delete",
        text: "This item deleted",
        icon: "success"
      }).then(() => {
        setOnLoading(false)
      })
     
    })
  }

  useEffect(() => {
    getData(); 
  },[onloading])

  return (
        <div>
          <div>
            <Link to = {"add"}><button className="btn btn-primary">Add</button></Link>
          </div>
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Content</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="" colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(ele => 
                    <tr key={ele.id}>
                      <th scope="row">{ele.id}</th>
                      <td>{ele.title}</td>
                      <td><img className="img-thumbnail" style={{width: 15 + "rem"}} src={ele.image} alt="..."/> </td>
                      <td>{ele.content}</td>
                      <td>{ele.date}</td>
                      <td>{ele.type}</td>
                      <td><Link to = {`update/${ele.id} `}><button type="button" className="btn "><i className="bi bi-pen-fill"></i></button></Link> </td>
                      <td><button onClick={() => deteleItem(ele.id)}><i className="bi bi-trash-fill"></i></button></td>
                    </tr>
                  )
              }
              </tbody>
          </table>
        </div>
        
    )
}

export default Admin;
