import { createContext, useReducer, useCallback } from "react";

export interface ICountState {
  count3: number;
  count4: number;
}

export interface ICountContext {
  count3: number;
  setCount3: (val: number) => void;
  count4: number;
  setCount4: (val: number) => void;
}

export const CountContext = createContext<ICountContext>({
  count3: 0,
  setCount3: () => {},
  count4: 0,
  setCount4: () => {},
});

function reducer(state: ICountState, action: any) {
  let newState;
  switch (action.type) {
    case "count3":
      newState = { ...state, count3: state.count3 + 1 };
      break;
    case "count4":
      newState = { ...state, count4: state.count4 + 1 };
      break;
    default:
      throw new Error();
  }
  return newState;
}

export const CountProvider = (props: any) => {
  const [count, dispatch] = useReducer(reducer, { count3: 0, count4: 0 });

  const setCount3 = useCallback(() => {
    dispatch({ type: "count3" });
  }, []);

  const setCount4 = useCallback(() => {
    dispatch({ type: "count4" });
  }, []);

  const context = {
    ...count,
    setCount3,
    setCount4,
  };

  return (
    <CountContext.Provider value={context}>
      {props.children}
    </CountContext.Provider>
  );
};
