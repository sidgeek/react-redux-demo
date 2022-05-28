import { createContext, useState } from "react";

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

export const CountProvider = (props: any) => {
  const [count3, setCount3] = useState<number>(0);
  const [count4, setCount4] = useState<number>(0);

  const context = {
    count3,
    setCount3,
    count4,
    setCount4,
  };

  return (
    <CountContext.Provider value={context}>
      {props.children}
    </CountContext.Provider>
  );
};
