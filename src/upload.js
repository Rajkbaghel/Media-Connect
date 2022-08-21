import "./upload.css"
import axios from "axios";
import { useEffect, useState } from "react";
const Upload=()=>{
    const [user,setuser] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3006/upload").then((data)=>{
            setuser(data.user)
        })
    }, [])
    const handleUpload = async(e)=>{
        const base64path = await filetobase64(e.target.files[0]);
        axios("",{
            method:"POST",
            url:"http://localhost:3006/upload",
            data:{image:base64path,Author:"",City:"",Description:""}
        })
    }
    const filetobase64 =(file) =>{
        return new Promise((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>{
                resolve(reader.result);
            }
            reader.onerror = (error)=>{
                reject(error);
            }
        })
    }
    return(
        <div className="container-upload">
        <form>
            <div className="first">
                <input className="input1" type="text"></input>
                <input type="file" onChange={(e)=>{handleUpload(e)}}></input>
            </div>
            <div className="second">
                <input className="input2" type="text" ></input>
                <input className="input2" type="text" name="City"></input>
            </div>
            <div className="third">
                <input className="input3" type="text" name="Description"></input>
            </div>
            <div>
            <button type="Submit">Post</button>
            </div>
        </form>
        </div>
    )
}
export default Upload;