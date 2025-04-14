export const FlagRed = (state='namesGeo',action) => {
    switch (action.type) {
        case 'changeFlag': return state = action.changeFlag
        default: return state
    }
}