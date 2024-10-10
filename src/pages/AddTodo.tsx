import { ChangeEvent, useContext, useState } from "react"
import Context from "../context/Context"
import banner from '../assets/addtodo_banner.svg'
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
        <>
        <h1>Welcome, {user}</h1>
        <img src={banner} alt="Banner da teka de adicionar tarefa" />
        <p>Add your new task</p>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="task" id="task" value={task} />
            <button>Add To List</button>
        </form>
        </>
    )
}

export default AddTodo