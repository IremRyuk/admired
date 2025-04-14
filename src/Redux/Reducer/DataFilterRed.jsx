export const DataFilterRed = (state=[],action) => {
    switch (action.type) {
        case 'dataAdd' : return state = [...state,action.dataAdd]
        case 'dataRemove' : return state = [...state.filter((info=>info != action.dataRemove))]
        default: return state
    }
}
// export const DataMinBud = (state='',action) => {
//     switch(action.type){
//         case 'minBud' : return state = action.minBud
//         default: return state
//     }
// }
export const DataMaxBud = (state='',action) => {
    switch(action.type){
        case 'maxBud' : return state = action.maxBud
        default: return state
    }
}