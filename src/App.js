import './App.css';
import {useState, useEffect} from "react";
import ShowShop from "./shop"

function App() {
    const [money, setMoney] = useState(5000)

    return (
    <div className="app">
        <div>
            <p>Ձեզ մոտ առկա գումարը` {money}.0 AMD</p>
        </div>
      <ShowShop cash={money} />
    </div>
  );
}
export default App;