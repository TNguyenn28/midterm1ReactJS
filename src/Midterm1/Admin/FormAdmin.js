import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const FormAdmin = () => {

    const id = useParams();
    
    const [data, setData] = useState([]);
    const [onLoading, setOnLoading] = useState(false);

    const getData = () => {
        if(!onLoading){
            axios.get(`http://localhost:3000/news/${id.id}`).then(res => {
            setData(res.data);
        })
        }
    }

    const changeHandler = (e) => {
        const key = e.target.name;
        var value = e.target.value;
        if(key === "image"){
            value = "Images/" + e.target.files[0].name;
        }
        setData({
            ...data,
            [key]: value
        })
    }

    const submitHandler = (e) => {
        e.eventDefault();
    }

    const updateHandler = () => {
        axios.put(`http://localhost:3000/news/${id.id}`,data).then(() => {
            setData([]);
            setOnLoading(false);
        })
    }

    const createHandler = () => {
        axios.post(`http://localhost:3000/news/`,data).then(() => {
            setData([]);
            setOnLoading(false);
        })
    }

    useEffect(() => {
        if(id.id){
            getData();
        }
        setOnLoading(true);// eslint-disable-next-line
    },[onLoading]);

    const date = new Date();

    const current = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

    if(onLoading){
        return(
            <div>
                <div>
                    <Link to ={"/admin"}><button><i className="bi bi-arrow-left-square"></i></button></Link>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label forhtml="title" className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" id="title" placeholder="Title" onChange={changeHandler} value ={data.title}/>
                    </div>
                    <div className="mb-3">
                        <label forhtml="image" className="form-label">Image</label>
                        <input type="file" name="image" className="form-control" id="image"  onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        {data.image ? <img className="img-thumbnail" src={"/" + data.image} style = {{width: "15rem", height: "15rem"}}  alt="..."/> : ""}
                    </div>
                    
                    <div className="mb-3">
                        <label forhtml="content" className="form-label">Content</label>
                        <input type="text" name="content" className="form-control" id="content" value ={data.content} placeholder="Content" onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label forhtml="date" className="form-label">Date Create</label>
                        <input type="text" name="date" className="form-control" disabled value ={data.date ? data.date :  current && setData({...data,date: current })} id="date" placeholder="Date" onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label forhtml="size" className="form-label">Size</label>
                        <input type="text" name="size" className="form-control" id="size" value ={data.size} placeholder="Size" onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label forhtml="type" className="form-label">Type</label>
                        <input type="text" name="type" className="form-control" id="type" value ={data.type} placeholder="Type" onChange={changeHandler}/>
                    </div>
                    <div>   
                    <button type="button" onClick={id.id ? updateHandler : createHandler} className="btn btn-primary">{id.id ? "Edit" : "ADD"}</button>
                    </div>
                </form>
            </div>      
        )
    }else{
        return(
            <div>
                Loading...
            </div>
        )
    }
    
}

export default FormAdmin;