import React, { createContext, useState } from 'react';
import { initialTodos } from './initialTodos';

interface Todo {
    id: number;
    title: string;
    text: string;
    priority: string;
    completed: boolean;
}

interface DayTodos {
    [day: string]: Todo[];
}

interface TodoContextData {
    todos: DayTodos;
    toggleTodo: (day: string, id: number) => void;
}



const TodoContext = createContext<TodoContextData>({} as TodoContextData);

interface TodoProviderProps {
    children: any;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<DayTodos>(initialTodos);

    const toggleTodo = (day: string, id: number) => {
        setTodos(prevTodos => {
            const updatedDayTodos = prevTodos[day].map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            return {
                ...prevTodos,
                [day]: updatedDayTodos,
            };
        });
    };








    return (
        <TodoContext.Provider value={{ todos, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };
