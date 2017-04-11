let user = {
    email: null
}

const reducer = ((state = user, action) => {
    switch(action.type){
        case 'SIGNED_IN':
            user = {
                email: action.email
            }
            return user;
        default:
            return state;
    }
})
export default reducer;