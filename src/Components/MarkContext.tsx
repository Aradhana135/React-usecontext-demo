import React from "react";
import { createContext } from "vm";
export interface MarksContext{
    name:string,
    marks:number
}
const contextmarks = React.createContext<MarksContext | null>(null);
export const MarksContextProvider=contextmarks.Provider
export const MarksContextConsumer=contextmarks.Consumer