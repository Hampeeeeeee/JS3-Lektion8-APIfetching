import { useFetchTodos } from "../hooks/useFetchTodos";
import LoadSpinner from "./LoadSpinner";


const TodosAsyncAwait = () => {
    const { todos, isLoading, isError, error } = useFetchTodos();

    return (
        <>
            <div>TodosAsyncAwait</div>
            {isLoading && <LoadSpinner />}
            {isError && <p>Something went wrong: {error}</p>}
            {todos && (
                <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h2 >{todo.title}</h2>
                        {todo.completed
                            ? <p>Todo Completed!</p>
                            : <p>Todo not completed!</p>
                        }
                    </li>
                ))
                }
            </ul>
            )}
        </>

    )
}

export default TodosAsyncAwait