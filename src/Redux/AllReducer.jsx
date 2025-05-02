import { combineReducers } from "redux";
import { SearchDataRed } from "./Reducer/SearchDataRed";
import { DataFilterRed, DataMaxBud } from "./Reducer/DataFilterRed";
import { ScreenWidthRed } from "./Reducer/ScreenWidth";
import { FlagRed } from "./Reducer/FlagRed";
import { GiftsRed } from "./Reducer/GiftsRed";
import { DataGifts } from "./Reducer/DataGifts";
export const AllReducer = combineReducers({
    search:SearchDataRed,
    dataFilter:DataFilterRed,
    maxBud:DataMaxBud,
    width:ScreenWidthRed,
    flag:FlagRed,
    gifts:GiftsRed,
    dataGifts:DataGifts
})