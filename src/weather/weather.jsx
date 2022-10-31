import { useEffect } from "react";
import axios from "axios"

const Basic=({age,city})=>{
    const [color,setColor] =useEffect(['red'])
    let val="red";
    const options = {
        method: "GET",
        url: "https://movie-database-alternative.p.rapidapi.com/",
        params: { s: "Avengers Endgame", r: "json", page: "1" },
        headers: {
          "X-RapidAPI-Key": "a969a1b7edmsh69534fbd3085f6bp1e0580jsn79899fbd9e3e",
          "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
        },
      };
    
    useEffect(()=>{
        const fetchUsers= async ()=>{
            const result=await axios('');
            setColor(result.data.result);
        }
        
    })  
    return(
        <>
            Basic
            <span>{city}</span>
            <span>{age}</span>
            <button style={{width:"100px"}} onClick={()=>val="blue"}></button> 
        </>
    )
}
export default Basic; 