import { Link } from "react-router-dom";
import User from "../components/User.js"
import axios from "axios"
import { useEffect } from "react"

import ReactLoading from 'react-loading';
 


import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";



function Home() {

  
  if(window.localStorage.getItem("isloggedin")=="false")
  window.location.replace("http://localhost:3000")
  

  const [data,setData]=new React.useState([]);
  const [status,setStatus] =new React.useState("false");



  const fetchMoreData = () => {
    

    setStatus("true")

    axios.get('https://randomuser.me/api/?results=20 ')
      .then(function (response) {

        setData((pre) => {

         

          setStatus("false")

          return [...data, ...response.data.results];
        })

      })
      .catch(function (error) {

        console.log(error);
      })


  };

  useEffect(() => {

        fetchMoreData();
    
      }, []);

   

  
    return (
      <div>
        <div className="navbar">
        <p>MyApp</p>
        <p >  <Link style={{textDecoration:"none",color:"white"}} to='/'> Logout </Link></p>
        </div>
       
        <hr />

        
        <div className="loading">
        <ReactLoading
					type={status === "false" ? "blank" : "spin"}
					color="black"
					height="50px"
					width="50px"
				/>
        </div>
       
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          
        >
          {data.map((i, index) => (
           <User key={index} name={i.name.first} img={i.picture.large}
           
           />
          ))}
        </InfiniteScroll>
      </div>
    );
  
}

export default Home;
