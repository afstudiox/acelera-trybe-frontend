import { useContext, useEffect } from "react";
import Context from "../context/Context";
import banner from '../assets/todolist_banner.svg';
import style from './TodoList.module.css'; 
import { Todo } from "../api/todosApi";
import { useNavigate } from "react-router-dom";

function TodoList() {
    const { user, todos, loading, getTodos, editTodos } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {      
        console.log('UseEffect TodoList');
        if (!todos.length) {
            getTodos();
        }
    }, [getTodos]);

    function handleChange(task: Todo) {
        console.log('handleChange', task);
        editTodos({...task, checked: !task.checked})
    }

    return(
        <main className={style.container}>
            <h1 className={style.title}>Welcome, {user} </h1>
            <img className={style.banner} src={banner} alt="Banner da tela de Todo List" />
            <button className={style.button} onClick={() => navigate("/todo/add")}>Add new Task</button>
            <div className={style.box}>
                <p>Daily Tasks</p>
                <ul>
                    {
                        loading ? <p>Loading...</p> 
                            : todos.map((task) => {
                                return (
                                    <li key={task.id}>
                                        <label className={style.customCheckbox}>
                                            <input 
                                                type="checkbox"
                                                onChange={() => handleChange(task)}
                                                checked={task.checked}
                                            />
                                            <span className={style.checkmark}></span>
                                            {task.value}
                                        </label>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        </main>
    )
}

export default TodoList;
