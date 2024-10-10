import { useContext, useState } from 'react';
import banner from '../assets/banner.svg'
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const { onLogin } = useContext(Context);

    const navigate = useNavigate();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onLogin(input.username);
        console.log(input);
        navigate('/todo');
    }

    return(
        <>
            <h1>Welcome</h1>
            <img src={banner} alt='Banner da tela de login' />
            <form onSubmit={handleSubmit} >              
                <input onChange={handleChange} id='username' name='username' type="text" placeholder='Enter your username' />
                <input onChange={handleChange} id='password' name='password' type="password" placeholder='Enter your password' />
                <p>Forgot Password</p>
                <button>Sign In</button>
            </form>
        </>
    )
}

export default Login