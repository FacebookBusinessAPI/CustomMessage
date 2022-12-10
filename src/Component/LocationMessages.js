import React, { useState } from 'react'

const LocationMessages =() => {
    const [Number , setNumber] =useState("");
    const [longitude , setlongitude] =useState("");
    const [latitude , setlatitude] =useState("");
    const [name , setname] =useState("");
    const [address , setaddress] =useState("");

    const Submit = ()=>{
      
    }


  return (
    <div className="App">
      <div className="form_box">
        <p>Location Messages</p>
        <div className="form">
          <div className="input_box">
            <label>Mobile Number</label>
            <input
              type="number"
              placeholder="enter your mobile number with contry code"
              name="Number"
              className="input"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Longitude</label>
            <input
              type="number"
              placeholder="enter your longitude"
              name="longitude"
              className="input"
              value={longitude}
              onChange={(e) => setlongitude(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Latitude</label>
            <input
              type="number"
              placeholder="enter your Latitude"
              name="latitude"
              className="input"
              value={latitude}
              onChange={(e) => setlatitude(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>City Name</label>
            <input
              type="number"
              placeholder="enter your City Name"
              name="name"
              className="input"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Message</label>
            <textarea
              rows="4"
              cols="50"
              placeholder="enter your Address"
              name="address"
              className="input"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
        </div>
        <div className="button_box">
          <button onClick={Submit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LocationMessages