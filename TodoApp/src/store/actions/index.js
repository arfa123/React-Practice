export const logUser = (email => {
    const action = {
        type: SIGNED_IN,
        email: email
    }
    return action;
})