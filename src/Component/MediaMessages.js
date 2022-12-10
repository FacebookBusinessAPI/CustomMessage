import React, { useState } from "react";
import "../CSS/MediaMessages.css";

const MediaMessages = (props) => {
  const [Number, setNumber] = useState("");
  const [Imge, setImge] = useState("");
  const Submit =  ()=>{
    console.log(Number)
    console.log(Imge)
    if (Number && Imge && Number.length === 12) {
        var data = {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: Number,
          type: "image",
          image: {
            link : Imge
          }
        };
        
        //send data app.js
        props.SendFunction(data);
      } else {
        alert("Please Enter Velid Data");
      }
  }

  return (
    <div className="App">
      <div className="form_box">
        <p>Media Messages</p>
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
            <label>Imge Link</label>
            <input
              type="text"
              placeholder="enter your imge Link or Id"
              name="Imge"
              className="input"
              value={Imge}
              onChange={(e) => setImge(e.target.value)}
            />
          </div>
        </div>
        <div className="button_box">
          <button onClick={Submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MediaMessages;
