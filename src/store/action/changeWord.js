const changeWord = (newWord) => {
    return{
        type: "CHANGEWORD",
        payload: newWord
    }
}
export {changeWord};