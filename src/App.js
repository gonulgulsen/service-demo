import React, {useEffect} from "react";
import getData from "./lib/service";

function App() {
  useEffect(()=>{
    getData(1)
    .then(result => console.log(result))
    .catch(err => console.log("Hata", err));
  }, []);

  return (
    <div>
      <h1>Console'u kontrol et!</h1>
    </div>
  )
}

export default App;
