// import { updateObject } from "./utility.js";

const initialState = {
  test: "text",
  pack: [],
  total: 0,
  changeData: false,
  payMethod: 0,
  active: '',
  reservation: false,
  pricing: [
    {
      id: 0,
      name: "Standard",
      price: 399,
      points: 72,
      freePoints: 72,
      additionalPoints: 0,
      pointPrice: 1,
      benefits: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store"
      ],
      quantity: 0
    },
    {
      id: 1,
      name: "Premium",
      price: 999,
      points: 198,
      freePoints: 198,
      additionalPoints: 0,
      pointPrice: 1,
      benefits: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store"
      ],
      quantity: 0
    },
    {
      id: 2,
      name: "Premium+",
      price: 1999,
      points: 1898,
      freePoints: 1898,
      additionalPoints: 0,
      pointPrice: 1,
      benefits: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store"
      ],
      quantity: 0
    }
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "CHOOSING_PACK":
      let addedItem = state.pricing.find(item => item.id === action.id)
      addedItem.quantity += 1
      return {
        ...state,
        pack: [addedItem],
        // items: 1,
        total: addedItem.price
      };
    case "ADD_ITEMS":
      console.log([action.name])
      let addPack = state.pack.find(item => item.id === action.id)
      if (action.name === "quantity") {
        addPack.quantity += 1
        addPack.freePoints += addPack.points
        let newTotal = state.total + addPack.price
        return {
          ...state,
          total: newTotal
        };
      }
      else {
        addPack.additionalPoints += 1
        let newTotal = state.total + addPack.pointPrice
        return {
          ...state,
          total: newTotal
        };
      }

    case "REMOVE_ITEMS":
      let removePack = state.pack.find(item => item.id === action.id)
      if (action.name === "quantity") {
        removePack.quantity -= 1
        removePack.freePoints -= removePack.points
        let newTotal = state.total - removePack.price
        return {
          ...state,
          total: newTotal
        };
      }
      else {
        removePack.additionalPoints -= 1
        let newTotal = state.total - removePack.pointPrice
        return {
          ...state,
          total: newTotal
        };
      }
    case "WANT_RESERVATION":
      console.log(state.reservation)
      return {
        ...state,
        reservation: !state.reservation

      }
    case "INVOICE_DATA":
      return {
        ...state,
        changeData: action.data
      };

    case "PAY_METHOD":
      // console.log('click' + state.payMethod)
      return {
        ...state,
        payMethod: action.method
      };

    default:
  }

  return state;
};

export default reducer;
