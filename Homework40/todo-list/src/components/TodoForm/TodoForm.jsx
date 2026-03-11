import React, {useState} from 'react';
import {TodoCard} from './TodoCard.jsx';
import {Form,Button} from 'react-bootstrap'
import {initialState} from './formConfig.js'
import {InputComponent, inputs} from '../Input'
const TodoForm = () => {
    const [data, setData] = useState({...initialState});
    const [todos, setTodos] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setData(data => ({...data, showMessage:true}))
        setTodos( prev => ([...prev, {...data}]))
        setData({...initialState})
    }

    const changeHandler = (e) => {
        setData(data => ({...data, [e.target.name]: e.target.value}))
    }

    return (
        <>
            <Form onSubmit={submitHandler}>
                {inputs.map((input) => (
                    <InputComponent
                        key={input.id}
                        input={input}
                        value={data[input.name] || ""}
                        onChange={changeHandler}
                    />
                ))}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {todos.map((todo, id) => <TodoCard key={id} todo={todo}></TodoCard>) }
    </>
)
}
export default TodoForm