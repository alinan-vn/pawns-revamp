const saveBlogs = blogs => {
    return {
        type: 'SAVE_BLOGS',
        blogs
    }
}

export {
    saveBlogs
}
