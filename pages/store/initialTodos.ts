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

export const initialTodos: DayTodos = {
    "Today Tasks": [
        { id: 1, title: 'Visit David', text: 'Lorem Ipsum Dolor Sit met...', priority: 'first', completed: false },
        { id: 2, title: 'Groceries for dinner', text: 'Lorem Ipsum Dolor Sit met...', priority: 'second', completed: false },
        { id: 3, title: 'Fix Dad’s iPad', text: 'Lorem Ipsum Dolor Sit met...', priority: 'third', completed: false },
    ],
    "Tomorrow Tasks": [
        { id: 1, title: 'Visit David', text: 'Lorem Ipsum Dolor Sit met...', priority: 'first', completed: false },
        { id: 2, title: 'Groceries for dinner', text: 'Lorem Ipsum Dolor Sit met...', priority: 'second', completed: false },
        { id: 3, title: 'Fix Dad’s iPad', text: 'Lorem Ipsum Dolor Sit met...', priority: 'third', completed: false },
    ],
    "09/07 Tasks": [
        { id: 1, title: 'Visit David', text: 'Lorem Ipsum Dolor Sit met...', priority: 'first', completed: false },
        { id: 2, title: 'Groceries for dinner', text: 'Lorem Ipsum Dolor Sit met...', priority: 'second', completed: false },
        { id: 3, title: 'Fix Dad’s iPad', text: 'Lorem Ipsum Dolor Sit met...', priority: 'third', completed: false },
    ],
    "10/07 Tasks": [
        { id: 1, title: 'Visit David', text: 'Lorem Ipsum Dolor Sit met...', priority: 'first', completed: false },
        { id: 2, title: 'Groceries for dinner', text: 'Lorem Ipsum Dolor Sit met...', priority: 'second', completed: false },
        { id: 3, title: 'Fix Dad’s iPad', text: 'Lorem Ipsum Dolor Sit met...', priority: 'third', completed: false },
    ],
    "11/07 Tasks": [
        { id: 1, title: 'Visit David', text: 'Lorem Ipsum Dolor Sit met...', priority: 'first', completed: false },
        { id: 2, title: 'Groceries for dinner', text: 'Lorem Ipsum Dolor Sit met...', priority: 'second', completed: false },
        { id: 3, title: 'Fix Dad’s iPad', text: 'Lorem Ipsum Dolor Sit met...', priority: 'third', completed: false },
    ],
    "12/07 Tasks": [
        { id: 1, title: 'Visit David', text: 'Lorem Ipsum Dolor Sit met...', priority: 'first', completed: false },
        { id: 2, title: 'Groceries for dinner', text: 'Lorem Ipsum Dolor Sit met...', priority: 'second', completed: false },
        { id: 3, title: 'Fix Dad’s iPad', text: 'Lorem Ipsum Dolor Sit met...', priority: 'third', completed: false },
    ]
}
