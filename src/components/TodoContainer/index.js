import {useState} from 'react';

import EmptyTodo from '../EmptyTodo';

import { MdDelete ,MdEdit } from "react-icons/md";

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
    EditButton,
    EmptyInputTextMsg,
    ButtonsContainer
} from './styledComponents';

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', checked: false },
        { id: 2, text: 'Build a Todo App', checked: false },
        { id: 3, text: 'Master JavaScript', checked: false }
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
    
    const EditTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: prompt('Edit todo:', todo.text) || todo.text };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const changeCheckedStatus = id => {
        const updatedTodos = todos.map(todo =>
        todo.id === id
        ? {...todo, checked: !todo.checked}
        : todo
    );

  setTodos(updatedTodos);
};

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
                            <input type="checkbox" key={todo.id} onChange={() => changeCheckedStatus(todo.id)} htmlFor={todo.id} />
                            <TodoItem key={todo.id} checked={todo.checked}>
                                {todo.text}
                            </TodoItem>

                            <ButtonsContainer>
                                <EditButton onClick={() => EditTodo(todo.id)}>
                                    <MdEdit />
                                </EditButton>
                                <DeleteButton onClick={() => DeleteTodo(todo.id)}>
                                    <MdDelete />
                                </DeleteButton>
                            </ButtonsContainer>
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