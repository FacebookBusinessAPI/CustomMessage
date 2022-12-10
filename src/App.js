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
        Authorization: "Bearer EAAGp6OmGBZCUBAOKTRgrVEqGnFhiSgmSwobnaizLxHGwMuBmr5lz6SJUxJTvGxrZBLwAiOsSMBh56lAGrXEKlRZBIs4FiAHG4bkNP6zvhY5aqlGFsU88WXfhGzWIDZAzTg0hImBXSa5jPOFzbwMFVyBFC54HT7fN3pgT4JlU8wP6nqtwZBPta",
          
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
