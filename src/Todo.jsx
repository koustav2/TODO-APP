import React from 'react'
import { FaTrash } from 'react-icons/fa';

const style = {
  li: `flex justify-between bg-slate-400 p-4 my-4 capitalize`,
  liComplete: `flex justify-between bg-slate-700 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
}

function Todo({ todo, toggle, deleteText }) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          type="checkbox" checked={todo.completed ? 'checked' : ''} />
        <p
          onClick={() => { toggle(todo) }}
          className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
      </div>
      <button onClick={() => deleteText(todo.id)}>{<FaTrash />}</button>
    </li>
  )
}

export default Todo;