import React from 'react'

function User(props) {
  return (
    <div className="user">

        <h2>{props.name}</h2>
        <img src={props.img} alt="" />



    </div>
  )
}

export default User