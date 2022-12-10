import "./App.css";
// import MediaMessages from "./Component/MediaMessages";
import axios from "axios";
import CustomMessage from "./Component/CustomMessage";
// import LocationMessages from "./Component/LocationMessages";

function App() {

  const SendData = (ConfigData)=>{
    var data = JSON.stringify(ConfigData);

    var config = {
      method: "post",
      url: "https://graph.facebook.com/v15.0/111412271813097/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer EAAGp6OmGBZCUBAO7PH0phmdOcLK1mukrmfk3znJ5H4vNq8m08ZAirJD5enT1Mumyf5xCeM6l790yzDmmcFrrYbKf6OwfN5Nx8ZCDZAAV56rGEVnQ6hdOwxdSYlwvS7rd6hIp7cL329fpseYCTEgtLnmrJAGjob0hyYRpzfRF2eZCGpmvKECWrFAlB1ut8VpV5bJXGL6uwMAZDZD",
      },
      data: data,
    };

     axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <>
      <CustomMessage SendFunction = {SendData}/>
      {/* <MediaMessages SendFunction = {SendData}/> */}
      {/* <LocationMessages/> */}
    </>
  );
}

export default App;