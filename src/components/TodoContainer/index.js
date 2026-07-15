import {useState} from 'react';

import EmptyTodo from '../EmptyTodo';

import { MdDelete } from "react-icons/md";

import { v4 as uuidv4 } from 'uuid';

import {
    TodoContainer,
    TodoHeader,
    TodoList,
    TodoItemContainer,
    TodoItem,
    FormContainer,
    Input,
    LabelElement,
    Button,
    DeleteButton,
    EmptyInputTextMsg
} from './styledComponents';

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a Todo App' },
        { id: 3, text: 'Master JavaScript' }
    ]);

    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event) => {
        setErrorMsg('');
    };

    const AddTodo = (event) => {
        event.preventDefault();
        const inputElement = event.target.elements.todoInput;
        const newTodoText = inputElement.value.trim();
        if (newTodoText.trim() === '') {
            setErrorMsg('Please enter some text');
            alert('Please enter some text');
            return;
        }
        if (newTodoText) {
            const newTodo = { id: uuidv4(), text: newTodoText };
            setTodos([...todos, newTodo]);
            inputElement.value = '';
        }
    };

    const DeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <TodoContainer>
            <TodoHeader>My TodoList</TodoHeader>
            <FormContainer onSubmit={AddTodo}>
                <LabelElement htmlFor="todoInput">Add Todo:</LabelElement>
                <Input 
                    type="text" 
                    id="todoInput" 
                    name="todoInput" 
                    placeholder="Enter a new todo" 
                />
                {errorMsg && <EmptyInputTextMsg>{errorMsg}</EmptyInputTextMsg>}
                <Button type="submit" onClick={handleInputChange}>
                    Add
                </Button>
            </FormContainer>

            {todos.length > 0 ? (
                <TodoList>
                    {todos.map(todo => (
                        <TodoItemContainer key={todo.id}>
                        <input type="checkbox" key={todo.id} />
                        <TodoItem key={todo.id}>{todo.text}</TodoItem>
                        <DeleteButton onClick={() => DeleteTodo(todo.id)}>
                            <MdDelete />
                        </DeleteButton>
                        </TodoItemContainer>
                    ))}
                </TodoList>
            ) : (
                <EmptyTodo />
            )}
        </TodoContainer>
    );
};

export default TodoApp;