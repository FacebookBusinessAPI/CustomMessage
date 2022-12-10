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
          "Bearer EAAGp6OmGBZCUBABJZCX1ig3xK5OX4kHbFFimEaae3vXZApZCXyZAnKAEEdNpTrgoHMacpfzZAs5iOWFZCWhPhGqbki6SiSAoZCdfcfgQ5r2ePqR1XINtmJ0WH9BcWMzYYhwTdIfdf4KR0w4PHKaS8M0dKwQdGKNpSZBsfkfOZCANRZCQr4R0rKEReUI",
          // EAAGp6OmGBZCUBABJZCX1ig3xK5OX4kHbFFimEaae3vXZApZCXyZAnKAEEdNpTrgoHMacpfzZAs5iOWFZCWhPhGqbki6SiSAoZCdfcfgQ5r2ePqR1XINtmJ0WH9BcWMzYYhwTdIfdf4KR0w4PHKaS8M0dKwQdGKNpSZBsfkfOZCANRZCQr4R0rKEReUI
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
