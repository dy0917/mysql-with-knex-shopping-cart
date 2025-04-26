import { createContext, useEffect, useReducer } from "react";
export const PaymentsContext = createContext();

function reducer(state, action) {
  if (action.type === "addPayment") {
    return {
      ...state,
      isLoading: false,
      payments: action.payload,
    };
  } else if (action.type === "setPayments") {
    return {
      payments: action.payload,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
}

export const PaymentsProvider = (props) => {
  const [paymentsState, dispatch] = useReducer(reducer, {
    isLoading: true,
    payments: [],
    error: "",
  });

  const getPaymentById = (id) => {
    return paymentsState.payments.find((p) => p.id == id);
  };

  return (
    <PaymentsContext.Provider
      value={{ paymentsState, paymentDispatch: dispatch, getPaymentById }}
    >
      {props.children}
    </PaymentsContext.Provider>
  );
};
