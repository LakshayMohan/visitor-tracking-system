import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./home.css";

import axios from "axios";

const Home  = () => {
    const [data, setData] =useState([])

    const loadData = async () => {
        const response = await axios.get("http://localhost:4001/api/get")
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style = {{marginTop : "100px"}}>
            <table className ="styled-table">
                <thead>
                    <tr>
                        <th style = {{textAlign: "center"}}>No.</th>
                        <th style = {{textAlign: "center"}}>S_name</th>
                        <th style = {{textAlign: "center"}}>S_id</th>
                        <th style = {{textAlign: "center"}}>S_course</th>
                        <th style = {{textAlign: "center"}}>S_ph_no</th>
                        <th style = {{textAlign: "center"}}>S_email</th>
                        <th style = {{textAlign: "center"}}>date_in</th>
                        <th style = {{textAlign: "center"}}>date_out</th>
                        <th style = {{textAlign: "center"}}>Time_in</th>
                        <th style = {{textAlign: "center"}}>Time_out</th>
                        <th style = {{textAlign: "center"}}>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) => {
                        return (
                            <tr key = {item.id}>
                                <th scope = "row">{index+1}</th>
                                <td>{item.S_name}</td>
                                <td>{item.S_id}</td>
                                <td>{item.S_course}</td>
                                <td>{item.S_ph_no}</td>
                                <td>{item.S_email}</td> 
                                <td>{item.date_in}</td> 
                                <td>{item.date_out}</td> 
                                <td>{item.time_in}</td> 
                                <td>{item.time_out}</td> 
                                <td>
                                    <Link to = {`/update/${item.id}`}>
                                    <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className= "btn btn-delete">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
        </div>
    )
}

export default Home;