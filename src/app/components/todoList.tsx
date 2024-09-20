import React, { useReducer } from "react";
import Button from "@/app/blocks/button";
import CheckBox from "@/app/blocks/form/checkBox";



function reducer(state, action) {
    switch (action.type) {
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo !== action.payload)
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo === action.payload ? { ...todo, checked: !todo.checked } : todo
                )
            };
        case 'REMOVE_ALL_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.checked)
            };
        default:
            return state;
    }
}

export default function TodoList() {
    const [state, dispatch] = useReducer(reducer, {
        todos: [
            { name: 'Faire les courses', checked: false },
            { name: 'Faire caca', checked: false },
            { name: 'Manger des fraises', checked: false }
        ]
    });

    return (
        <>
            <ul className="flex flex-col space-y-2">
                {state.todos.map(todo => (
                    <li key={todo.name} className="flex items-center space-x-2">
                        <CheckBox
                            id={`check-${todo.name}`}
                            checked={todo.checked}
                            onChecked={() => dispatch({type: 'TOGGLE_TODO', payload: todo})}
                            label={todo.name}
                        />
                        <Button
                            onClickButton={() => dispatch({type: 'REMOVE_TODO', payload: todo})}
                            text="Supprimer"
                            color="gray"
                        />
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <Button
                    onClickButton={() => dispatch({type: 'REMOVE_ALL_COMPLETED'})}
                    text="Supprimer toutes les tâches réalisées"
                    color="red"
                />
            </div>
        </>
    );
}