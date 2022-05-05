import { GlobalActionType, IComplicatedCount } from "../reducers/global-status";
import { useDispatchStore, useStore } from "./use-store";

export const useCount = () => {
  return useStore((state) => state.globalStatus.count);
};

export const useDispatchUpdateCount = () =>
  useDispatchStore<number, GlobalActionType>(GlobalActionType.UPDATE_COUNT);


export const useCount2 = () => {
  return useStore((state) => state.globalStatus.count2);
};

export const useDispatchUpdateCount2 = () =>
  useDispatchStore<IComplicatedCount, GlobalActionType>(GlobalActionType.UPDATE_COUNT2);
