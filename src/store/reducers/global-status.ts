import { IStoreAction } from "../action";
import { produce } from "immer";

export const enum GlobalActionType {
  UPDATE_COUNT = "UPDATE-COUNT",
  UPDATE_COUNT2 = "UPDATE-COUNT2",
  UPDATE_COUNT2_VALUE = "UPDATE_COUNT2_VALUE",
  UPDATE_COUNT2_STATUS = "UPDATE_COUNT2_STATUS",
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

export const globalStatusReducer = produce((
  state: IGlobalStatus = initStatus,
  action: IStoreAction<GlobalActionType>
): IGlobalStatus => {
  switch (action.type) {
    case GlobalActionType.UPDATE_COUNT: {
      state.count = action.payload
      return state
    }

    case GlobalActionType.UPDATE_COUNT2: {
      state.count2 = action.payload
      return state
    }

    case GlobalActionType.UPDATE_COUNT2_VALUE: {
       state.count2.value = action.payload
       return state
    }

    case GlobalActionType.UPDATE_COUNT2_STATUS: {
      state.count2.status.isValid = action.payload
      return state
    }

    default:
      return state;
  }
}, initStatus);
