import Logo from "./assets/logo.png"
import Camera from "./assets/camera.png"
import { useEffect, useState } from "react"
import "./post-view.css";
import { Link } from "react-router-dom";
const Postview=()=>{
    const[userData, setUserData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3004/user').then((data)=>{
            return data.json();
        }).then((userData)=>{
            setUserData(userData)
            console.log(userData);
        })
    },[]);
    return(
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img className="Logo" src={Logo} alt="Logo"></img>
                        <Link to="/postview/upload"><img className="Camera" src ={Camera} alt="Camera" /></Link>
                    </div>
                </header>
                <hr/>
                <div>
                    {
                        userData.map((user,i)=>{
                            return(
                                <div className="post">
                                    <div className="user-information" key={i}>
                                        <div className="info">
                                        <h2>{user.name}</h2>
                                        <h3>...</h3>
                                        </div>
                                        <span className="user-location">{user.location}</span>
                                    </div>
                                    <div className="user-post">
                                        <img src={user.PostImage} alt="post"></img>
                                    </div>
                                    <div className="user-data">
                                        <span>{user.date}</span>
                                    </div>
                                    <div className="like">{user.likes} likes</div>
                                    <div className="description">
                                        {user.description}
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Postview;