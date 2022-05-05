import { IStoreAction } from "../action";

export const enum GlobalActionType {
  UPDATE_COUNT = "UPDATE-COUNT",
  UPDATE_COUNT2 = "UPDATE-COUNT2",
}

export interface IComplicatedCount {
  value: number;
  status: {
    isValid: boolean;
    name: string;
  };
}
export interface IGlobalStatus {
  count: number;
  count2: IComplicatedCount;
}

const initStatus: IGlobalStatus = {
  count: 0,
  count2: {
    value: 100,
    status: {
      isValid: false,
      name: "test",
    },
  },
};

export const globalStatusReducer = (
  state: IGlobalStatus = initStatus,
  action: IStoreAction<GlobalActionType>
): IGlobalStatus => {
  switch (action.type) {
    case GlobalActionType.UPDATE_COUNT: {
      return { ...state, count: action.payload };
    }

    case GlobalActionType.UPDATE_COUNT2: {
      return { ...state, count2: action.payload };
    }

    default:
      return state;
  }
};
