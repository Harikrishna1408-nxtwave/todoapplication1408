import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;`

export const TodoHeader = styled.h1`
    font-size: 25px;
    color: #211b1b;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Arial', sans-serif;`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
`;

export const LabelElement = styled.label`
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #942121;
    color: white;
    border: none;
    margin-top: 10px;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const TodoList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;`

export const TodoItem = styled.li`
    display: flex;
    text-decoration: ${props => (props.checked ? 'line-through' : 'none')};  
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;`

export const DeleteButton = styled.button`
    margin-left: auto;
    padding: 5px 10px;
    background-color: #ff4d4d;    
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background-color: #ff1a1a;
    }
`;

export const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const EmptyInputTextMsg = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`

export const EditButton = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #1b1b3c;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #000033;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;