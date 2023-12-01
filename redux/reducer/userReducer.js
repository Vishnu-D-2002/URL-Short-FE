const initialState = {
    user: null,
    profile:null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            return  {
              ...state,
              user:action.payload
            }
        
        case 'PROFILE':
            return {
                ...state,
                profile:action.payload
            }
        
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                profile:null
            }
        
        default:
            return state;
    }
}

export default userReducer;