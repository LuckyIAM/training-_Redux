const initialState = "Apple";
const wordReducer = (state = initialState, action) => {
    switch (action.type){
        case "CHANGEWORD":
            return action.payload;
        default : return state
    }
}

export default wordReducer;