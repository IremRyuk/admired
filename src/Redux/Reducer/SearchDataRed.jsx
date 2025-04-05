export let SearchDataRed = (state=null,action) => {
    switch(action.type){
        case 'changeData':return state = action.changeData
        default:return state
    }
}