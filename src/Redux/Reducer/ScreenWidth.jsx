export const ScreenWidthRed = (state=window.innerWidth,action) => {
    switch (action.type) {
        case 'changeWidth': return state = action.changeWidth
        default: return state
    }
}