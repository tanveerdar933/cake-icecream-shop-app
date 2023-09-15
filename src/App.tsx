import OrderForm from "./components/OrderForm"
import OrdersList from "./components/OrdersList"
import ProductCard from "./components/ProductCard"
import cakeIMG from "/assets/imgs/cake.jpg"
import iceCreamIMG from "/assets/imgs/icecream.jpg"

function App() {
  return (
    <div className="container">
      <div className="row gap-5">
        <div className="vstack justify-center gap-5">
          <div className="hstack gap-3">
            <ProductCard name="Cakes" imgSrc={cakeIMG} stock={5} />
            <ProductCard name="Ice-Creams" imgSrc={iceCreamIMG} stock={10} />
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
