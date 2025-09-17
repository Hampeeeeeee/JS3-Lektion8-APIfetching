import { useCallback, useEffect, useState } from "react"
import type { JsonDataTodo } from "../types/todo.types"
import axios from "axios"

interface UseFetchTodosResult {
    todos: JsonDataTodo[] | null;
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

export const useFetchTodos = (): UseFetchTodosResult => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [todos, setTodos] = useState<JsonDataTodo[]>([])

    const fetchTodos = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        setError(null);

        try {
            const response = await axios.get<JsonDataTodo[]>(
                "https://jsonplaceholder.typicode.com/todos/"
            );

            setTimeout(() => {
                setTodos(response.data);
                setIsLoading(false);
            }, 1500);
        } catch (err: unknown) {
            setIsLoading(false);
            setIsError(true);

            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else {
                setError("Unknown error occurred");
            }
        }
    }, []);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return { todos, isLoading, isError, error }
}