const tokenValidation = (props) => {
    const token = localStorage.getItem('token')
    if (!token){
        props.history.push('/login')
    } else {
        const reqObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        fetch('https://enigmatic-gorge-45286.herokuapp.com/current_user', reqObj)
        .then(resp => resp.json())
        .then(user => {
            // console.log('token to user', user)
            props.loginUser(user)
        })
    }
    // console.log('hello from inside token valiadtion')
}

export {
    tokenValidation
}