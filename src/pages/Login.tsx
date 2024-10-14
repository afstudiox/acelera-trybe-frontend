import { useContext, useState } from 'react';
import banner from '../assets/banner.svg'
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
import InputField from '../Components/InputField';
import CustomLink from '../Components/CustomLink';
import FormButton from '../Components/FormButton';
import Banner from '../Components/Banner';
import style from './Login.module.css';

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
        <main className={style.container}>
            <h1 className={style.title}>Welcome</h1>

            <Banner
                className={style.banner} 
                src={banner} 
                alt="Banner da tela de Login" 
            />

            <form onSubmit={handleSubmit} className={style.container}>

                <InputField 
                    id='username' 
                    name='username' 
                    type='text' 
                    placeholder='Enter your username' 
                    value={input.username} 
                    className={style.input}
                    onChange={handleChange} 
                />  

                <InputField 
                    id='password' 
                    name='password' 
                    type='password' 
                    placeholder='Enter your password' 
                    value={input.password} 
                    className={style.input}
                    onChange={handleChange}
                />

                <CustomLink href='#' target='_self' className={style.link}>
                    Forgot your password
                </CustomLink>

                <FormButton 
                    label={'Login'} type='submit' className={style.button}
                />
                
            </form>
        </main>
    )
}

export default Login