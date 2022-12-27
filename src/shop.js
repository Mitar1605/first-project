import {useState} from "react";

import "./shop.css"

let shopIngridients = [
    {id: 1, name: "ՇՇով մածուն", price: 370},
    {id: 2, name: "Թան", price: 200},
    {id: 3, name: "Կաթ", price: 350},
    {id: 4, name: "Տավարի մսով քյաբաբ", price: 1300},
    {id: 5, name: "Հավի մսով շաուրմա", price: 1100},
]

function ShowShop(props) {

    let cash = props.cash
    const [money, setMoney] = useState(cash)

    const [shoped, setShoped] = useState([])
    const [shopedMoney, setShopedMoney] = useState(0)
    
    return (
        <div>
            <div className={"mainShop"}>
                {shopIngridients.map((el) => {
                    return (
                        <div className={"shopIngridientsDiv"} key={el.id}>
                            <p>{el.name} - Արժեքը` {el.price} AMD</p>
                            <div className={"shopBtnDiv"}>
                                <button onClick={() => {
                                    if (money - el.price >= 0) {
                                        setShoped([
                                            ...shoped,
                                            el
                                        ])
                                        setMoney(() => money - el.price)
                                        setShopedMoney(() => shopedMoney + el.price)
                                    }else{
                                        alert(`Դւք չունեք բավարար քանակի գումար: ${money}.0 AMD`)
                                    }
                                }
                                }>Shop</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={"shopedDiv"}>
                <h1>Ձեր կտրոնը`</h1>
                {shoped.map((el) => {
                    return (
                        <div>
                            <p>{el.name} - {el.price} AMD</p>
                        </div>
                    )
                })}
                <h3>Վճարման ենթակա գումար` {shopedMoney}.0 AMD</h3>
            </div>
        </div>

    )

}
export default ShowShop;