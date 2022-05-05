import { GlobalActionType } from "../reducers/global-status";
import { useDispatchStore, useStore } from "./use-store";

export const useCount = () => {
  return useStore((state) => state.globalStatus.count);
};

export const useDispatchUpdateCount = () =>
  useDispatchStore<number, GlobalActionType>(GlobalActionType.UPDATE_COUNT);


export const useTheme = () => {
  return useStore((state) => state.globalStatus.theme);
};

export const useDispatchUpdateTheme = () =>
  useDispatchStore<string, GlobalActionType>(GlobalActionType.UPDATE_THEME);
