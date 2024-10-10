import { useState } from "react";
import Context from "./Context";
import { fetchTodos, postTodo, putTodo, Todo } from "../api/todosApi";

export type ProviderProps = {
    children: React.ReactNode;
}

export type ProviderValues = {
    user: string;
    todos: Todo[];
    loading: boolean;
    onLogin: (username: string) => void;
    getTodos: () => Promise<void>;
    editTodos: (taskData: Todo) => Promise<void>;
    addTodos: (task: string) => Promise<void>;
}


function Provider({ children }: ProviderProps) {

    const [user, setUser] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);

    const onLogin = (username: string) => {
        setUser(username);
    };

    const getTodos = async () => {
        try {
            setLoading(true);
            const result = await fetchTodos();
            setTodos(result);
        } catch (error) {
            console.log('Erro ao buscar tarefas', error);
        } finally {
            setLoading(false);
        }
    };

    const editTodos = async (taskData: Todo) => {
        const updatedTodos = todos.map((task) => {
            if(task.id === taskData.id) {
                task.checked = taskData.checked;
            }
            return task;
        });
        setLoading(true);
        setTodos(updatedTodos);
        setLoading(false);

        await putTodo(taskData);
    };

    const addTodos = async (task: string) => {
        setLoading(true);
        const newTask = await postTodo(task);
        setTodos([...todos, newTask]);
        setLoading(false);
    }

    const values: ProviderValues = {
        user,
        todos,
        loading,
        onLogin, 
        getTodos,
        editTodos,
        addTodos
    };

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider;