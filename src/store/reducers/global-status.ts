import { IStoreAction } from "../action";

export const enum GlobalActionType {
  UPDATE_COUNT = "UPDATE-COUNT",
  UPDATE_THEME = "UPDATE-THEME"
}

export interface IGlobalStatus {
  count: number;
  theme: string;
}

const initStatus: IGlobalStatus = {
  count: 0,
  theme: 'dark'
};

export const globalStatusReducer = (
  state: IGlobalStatus = initStatus,
  action: IStoreAction<GlobalActionType>
): IGlobalStatus => {
  switch (action.type) {
    case GlobalActionType.UPDATE_COUNT: {
      return { ...state, count: action.payload };
    }


    case GlobalActionType.UPDATE_THEME: {
      return { ...state, theme: action.payload };
    }


    default:
      return state;
  }
};
