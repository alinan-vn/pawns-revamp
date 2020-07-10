function dateFilter(dateData){
    const date = dateData.split('T')[0].split('-')
    const year = date[0]
    let month = date[1]
    const day = date[2]

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']

    const monthNum = parseInt(month) - 1
    month = months[monthNum]

    return `${month} ${day}, ${year}`
}

export {
    dateFilter
}