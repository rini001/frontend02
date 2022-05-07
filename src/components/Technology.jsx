import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Books.css'
export const Technology = () => {
    const [data,setData]=useState([])
    useEffect(() => {
		fetch("http://localhost:8000/technology", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setData(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
  return (
    <div>
   <div className='div1'>
        {data.map((el)=>(
             <Link style={{textDecoration:"none"}} to={`./${el.id}`}><div className='mainDiv'>
            <img src={el.book_image} alt="" />
            <p>{el.title}</p>
            <h5>{el.price}</h5>
            </div></Link>
        ))}
    </div>
    </div>
  )
}
