const currentProfile = (user) => {
    return {
        type: 'CURRENT_PROFILE',
        user
    }
}


export {
    currentProfile
}