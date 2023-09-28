import { useAppSelector } from "../app/store"

const OrdersList = () => {
  const { orders, loading } = useAppSelector(state => state.order)
  return (
    <div style={{ height: "fit-content", width: "250px" }} className="card shadow" >
      <div className="card-body">
        <h2>Orders List</h2>
        {
          loading ?
            <div className="order-box">
              Loading Order!
            </div>
            :
            (orders.map(order => (
              <div key={order.id} className="order-box">
                {order.id + 1}. {order.customer}'s order
              </div>
            )))

        }

      </div>
    </div>
  )
}

export default OrdersList