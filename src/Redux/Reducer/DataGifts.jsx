export const DataGifts = (state=[],action) => {
    switch(action.type){
        case 'dataGifts' : return state = action.dataGifts
        default: return state
    }
}