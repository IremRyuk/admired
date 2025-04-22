// Get Language Information From LocalStorage
const names = localStorage.getItem('names') || 'namesGeo'
// Reducer
export const FlagRed = (state=names,action) => {
    switch (action.type) {
        case 'changeFlag': return state = action.changeFlag
        default: return state
    }
}