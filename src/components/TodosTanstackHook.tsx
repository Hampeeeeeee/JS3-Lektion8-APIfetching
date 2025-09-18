import LoadSpinner from "./LoadSpinner"
import useTanstackTodos from "./useTanstackTodos"

const TodosTanstackHook = () => {
    const {isPending, isError, isSuccess, todos} = useTanstackTodos()

    return (
        <>
            <h2>TodosAsyncAwait</h2>
            {isPending && <LoadSpinner />}
            {isError && <p>Something went wrong:</p>}
            {isSuccess && todos && (
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

export default TodosTanstackHook
