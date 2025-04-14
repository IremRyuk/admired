import { combineReducers } from "redux";
import { SearchDataRed } from "./Reducer/SearchDataRed";
import { DataFilterRed, DataMaxBud } from "./Reducer/DataFilterRed";
import { ScreenWidthRed } from "./Reducer/ScreenWidth";
import { FlagRed } from "./Reducer/FlagRed";
export const AllReducer = combineReducers({
    search:SearchDataRed,
    dataFilter:DataFilterRed,
    maxBud:DataMaxBud,
    width:ScreenWidthRed,
    flag:FlagRed
})