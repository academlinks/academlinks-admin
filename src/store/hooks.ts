import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateT, DispatchT } from ".";

export const useAppDispatch: () => DispatchT = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
