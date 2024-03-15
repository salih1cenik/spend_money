import { BUY_PRODUCT, SELL_PRODUCT } from "./actions";

const initialState = {
  money: 100000000000,
  productCount: {},
  basket: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_PRODUCT:
      const newMoney = state.money - action.product.fiyat;
      const newProductCount = {
        ...state.productCount,
        [action.product.fiyat]:
          (state.productCount[action.product.fiyat] || 0) + 1,
      };
      const newBasket = {
        ...state.basket,
        [action.product.fiyat]: action.product,
      };
      return {
        ...state,
        money: newMoney,
        productCount: newProductCount,
        basket: newBasket,
      };

    case SELL_PRODUCT:
      const newSellMoney = Number(state.money) + Number(action.price);
      const newSellProductCount = {
        ...state.productCount,
        [action.price]: state.productCount[action.price] - 1,
      };
      const newSellBasket = { ...state.basket };
      delete newSellBasket[action.price];
      return {
        ...state,
        money: newSellMoney,
        productCount: newSellProductCount,
        basket: newSellBasket,
      };

    default:
      return state;
  }
}

export default reducer;
