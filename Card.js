function Card({item, increaseQuantity, Quant}) {


    return (
      <div className="card">
        <img src={item.imageSrc} alt="Product" className="card-image" />
        <div className="card-details">
          <p className="card-price">Rs.{item.price.toFixed(2)}</p>
          <button onClick={() => increaseQuantity(item.id)} className="card-button">Add Quantity</button>
          <p className="card-quantity">Quantity:{Quant[item.id]}</p>
        </div>
      </div>
    );
  }
  
  export default Card;