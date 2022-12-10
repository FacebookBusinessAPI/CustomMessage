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
          "Bearer EAAGp6OmGBZCUBACZBzAPLWziIu92iQmGUZBYhbT25l7pn3sF0daTrVDKALsnnjq2UgmeyZBhmKKFenSZA8fCffAuZBmCBIbmCruNLKidFijg7eYMtFle0eozmjHCHmYgE7NQvZCbpg8Wk1izvS2KZAOy6OxVTdZBdMvukm8O0Ji3x4ZBm6pLPF7ZAHG",
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
