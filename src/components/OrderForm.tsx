import { useState } from "react"

const OrderForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    cake: 0,
    iceCream: 0
  })
  const inputChangeHandler = (e: any) => {
    if (e.target.name !== "userName" && !!Number(e.target.value)) {
      setFormData(prvState => ({
        ...prvState,
        [e.target.name]: Number(e.target.value)
      }))
    }
    else if (e.target.name === "userName") {
      setFormData(prvState => ({
        ...prvState,
        [e.target.name]: e.target.value
      }))
    }
  }
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
  }
  return (
    <div style={{ height: "fit-content", width: "450px" }} className="card shadow">
      <div className="card-body">
        <form onSubmit={formSubmitHandler}>
          <div className="form-input-group">
            <label htmlFor="userName">User Name: </label>
            <input
              id="userName"
              className="form-input"
              name="userName"
              value={formData.userName}
              type="text"
              required
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="cake">Order Cake: </label>
            <input
              id="cake"
              className="form-input"
              name="cake"
              value={formData.cake}
              type="number"
              min={0}
              required
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="userName">Order Ice Cream: </label>
            <input
              id="iceCream"
              className="form-input"
              name="iceCream"
              value={formData.iceCream}
              type="number"
              min={0}
              required
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-input-group">
            <button className="btn m-auto" type="submit">CHECK OUT</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderForm