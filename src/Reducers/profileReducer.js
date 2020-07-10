function profileReducer (
    state = {
        currentProfile: null
    },
    action
){
    switch(action.type){
        case 'CURRENT_PROFILE':
            return {
                ...state,
                currentProfile: action.user
            }
        default:
            return state
    }
}

export default profileReducer
