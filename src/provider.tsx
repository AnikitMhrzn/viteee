import { useReducer,useContext } from "react";
import{ CounterContextType } from "./counterContext";
// import { counterReducer, initialState } from "../";

export function CountProvider({ children }) {

 <counterContext.Provider value={{}}>
    {children}
 </counterContext.Provider>
}
