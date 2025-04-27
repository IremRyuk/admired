export const GiftsRed = (state=[],action) => {
    switch (action.type) {
        case 'addGifts': return state = [...state,action.addGifts]
        case 'removeAndAdd':return (state =  [...state.filter((info=>info._id != action.removeAndAdd))])
        default: return state
    }
}