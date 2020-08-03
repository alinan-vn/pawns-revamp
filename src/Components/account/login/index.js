import React from 'react';

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        console.log(this.state)
    }

    render(){
        return(
            <section className='login'>
                <div className='login__input-container'>
                    <div className='login__input'>
                        <p>Username: </p>
                        <input 
                            onChange={this.handleInput}    
                            name='username' 
                            placeholder='username' 
                        />
                    </div>
                    <div className='login__input'>
                        <p>password: </p>
                        <input 
                            onChange={this.handleInput}
                            name='password' 
                            placeholder='password' 
                            type='password' 
                        />
                    </div>
                    <div className='login__submit'>
                        <button onClick={this.handleLogin} className='login__submit-btn'>Login!</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login