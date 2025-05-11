export const ModalRes = (state=true,action) => {
    switch (action.type) {
        case 'modal': return state = action.modal
        default: return state
    }
}