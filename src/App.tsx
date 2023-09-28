import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/store"
import OrderForm from "./components/OrderForm"
import OrdersList from "./components/OrdersList"
import ProductCard from "./components/ProductCard"
import cakeIMG from "/assets/imgs/cake.jpg"
import iceCreamIMG from "/assets/imgs/icecream.jpg"
import { fetchOrders } from "./features/orderSlice"

function App() {
  const { numbOfCake } = useAppSelector(state => state.cake)
  const { numbOfIcecream } = useAppSelector(state => state.icecream)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  return (
    <div className="container">
      <div className="row gap-5">
        <div className="vstack justify-center gap-5">
          <div className="hstack gap-3">
            <ProductCard name="Cakes" imgSrc={cakeIMG} stock={numbOfCake} />
            <ProductCard name="Ice-Creams" imgSrc={iceCreamIMG} stock={numbOfIcecream} />
          </div>
          <div className="hstack gap-2">
            <OrderForm />
          </div>
        </div>
        <div className="vstack justify-center">
          <OrdersList />
        </div>
      </div>
    </div>
  )
}

export default App
