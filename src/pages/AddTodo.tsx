import { ChangeEvent, useContext, useState } from "react"
import Context from "../context/Context"
import banner from '../assets/addtodo_banner.svg'
import style from './AddTodo.module.css';
import { useNavigate } from "react-router-dom";

function AddTodo() {

    const { user, addTodos } = useContext(Context);
    const [task, setTask] = useState('');
    const navigate = useNavigate();

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setTask(target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(!task) {
            return;
        }
        addTodos(task);
        navigate('/todo');
        // usar o sweetalert2
    }

    return(
        <main className={style.container}>
        <h1 className={style.title}>Welcome, {user}</h1>
        <img className={style.banner} src={banner} />
        <p className={style.intro}>Add What your want to do later on..</p>
        <form className={style.form} onSubmit={handleSubmit}>
            <input className={style.input} onChange={handleChange} type="text" name="task" id="task" value={task} placeholder="Add a task" />
            <button className={style.button}>Add To List</button>
        </form>
        </main>
    )
}

export default AddTodo