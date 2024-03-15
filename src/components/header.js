// Header.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyProduct, sellProduct } from "./actions";
import data from "../products.json";
import "./style.css";

function Header() {
  const money = useSelector(state => state.money);
  const productCount = useSelector(state => state.productCount);
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch();

  const handleBuyClick = (product) => {
    dispatch(buyProduct(product));
  };

  const handleSellClick = (price) => {
    dispatch(sellProduct(price));
  };

  const totalAmount = Object.entries(basket).reduce((total, [price, product]) => {
    const count = productCount[price] || 0;
    return total + count * product.fiyat;
  }, 0);

  return (
    <div>
      <h4>Spend Bill Gates' Money</h4>
      <h1 style={{ backgroundColor: "greenyellow" }}>Harcayabileceğim Param: $ {money}</h1>
      <br />
      <br />
      <br />
      <br />
      {data.map((product) => (
        <div className="card" key={product.id}>
          <div className="title">{product.name}</div>
          <div className="image">
            <img src={product.image} alt="" />
          </div>
          <div className="price">$ {product.fiyat}</div>

          <br />
          <div className="cardControl">
            <button
              onClick={() => handleSellClick(product.fiyat)}
              disabled={money === 0 || (productCount[product.fiyat] || 0) === 0}
            >
              Sell
            </button>
            <input
              type="text"
              value={productCount[product.fiyat] || 0}
              onChange={(e) => {
                // Burada yerel state güncellemesi yapmak için setProductCount kullanılmamalı
                // Redux store üzerinden güncelleme sağlanmalıdır
              }}
              style={{ width: "50px" }}
            />
            <button
              onClick={() => handleBuyClick(product)}
              disabled={money < product.fiyat}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
      <br />
      <br />
      <br />
      <div>
        <h2>Sepetim</h2>
        {Object.entries(basket).map(([price, product]) => {
          const count = productCount[price] || 0;
          return (
            <div key={price}>
              <p>
                Ürün Adı: {product.name} - Adet: {count} - Fiyat: $ {product.fiyat} - Toplam Fiyat: $ {count * product.fiyat}
              </p>
            </div>
          );
        })}
        <p>Toplam Ürün Bedeli: $ {totalAmount}</p>
      </div>
    </div>
  );
}

export default Header;
