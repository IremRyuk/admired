import { combineReducers } from "redux";
import { SearchDataRed } from "./Reducer/SearchDataRed";
import { DataFilterRed, DataMinBud, DataMaxBud } from "./Reducer/DataFilterRed";
import { ScreenWidthRed } from "./Reducer/ScreenWidth";
export const AllReducer = combineReducers({
    search:SearchDataRed,
    dataFilter:DataFilterRed,
    minBud:DataMinBud,
    maxBud:DataMaxBud,
    width:ScreenWidthRed
})