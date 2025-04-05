export const DataFilterAct = (dataAdd) => {
    return {type:'dataAdd',dataAdd}
}
export const DataFilterRemoveAct = (dataRemove) => {
    return {type:'dataRemove',dataRemove}
}
export const DataMin = (minBud) => {
    return {type:'minBud',minBud}
}
export const DataMax = (maxBud) => {
    return {type:'maxBud',maxBud}
}