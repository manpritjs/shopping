import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useState } from "react";

const itemDetails = [
  { id: 1, imageSrc: 'https://thumbs.dreamstime.com/z/red-apple-isolated-clipping-path-19130134.jpg', price: 90 },
  { id: 2, imageSrc: 'https://t3.ftcdn.net/jpg/00/56/01/00/360_F_56010077_UA98ADMw95rEB2hCuAlFOJkjdirrAAPV.jpg', price: 38 },
  { id: 3, imageSrc: 'https://i.pinimg.com/736x/0c/7e/dc/0c7edcc7c166411876163bd3e75d8b3b.jpg', price: 66 },
];


export default function BillingApp() {
   
    const [items, setItems] = useState(itemDetails)
    const [quantity, setQuantity] = useState({1:0, 2:0, 3:0});
    const [printBill, setPrintBill] =useState(false)
   
    const increaseQuantity = (id) => {
        setQuantity(p => {
            let x = {...p};
            x[id]++;
            return x;
        })
      };

      let grandTotal = 0;
    
      return (
        <div className="App">
          {items.map(item => (
            <Card key={item.id} item={item} increaseQuantity={increaseQuantity} Quant={quantity} />         
         ))}
          <button type="button" onClick={()=>setPrintBill(true)}>Bill</button>
          {printBill && (
          <div>
            <h2>Bill</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              {items.map((item) => {
                const itemTotal = item.price * quantity[item.id];
                grandTotal += itemTotal;
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>Rs.{item.price}</td>
                    <td>{quantity[item.id]}</td>
                    <td>Rs.{itemTotal}</td>
                  </tr>
                );
              })}
              </tbody>
            </table>
            <h3>Grand Total: Rs.{grandTotal}</h3>
          </div>
        )}
        </div>
      );
    }