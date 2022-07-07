export const reducer = (state, action) => {
  if (action.type === 'SET_ITEMS') {
    return {
      ...state,
      item: action.payload,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.album_id !== action.payload;
      }),
    };
  }
  if (action.type === 'INCREMENT') {
    const updatedCart = state.item.map((curElem) => {
      if (curElem.album_id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === 'DECREMENT') {
    let updatedCart = state.item
      .map((curElem) => {
        if (curElem.album_id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, item: updatedCart };
  }
  if (action.type === 'GET_TOTAL') {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;
        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
