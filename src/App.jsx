import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
// import './App.css'
// import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc, doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

import Todo from './Todo'
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-indigo-800 to-violet-500 `,
  container: `bg-slate-500 max-w-[500px] w-full m-auto rounded-md shadow-xl p-5`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `w-full p-2 rounded border-3 bg-yellow-500 border-gray-100 focus:outline-none focus:border-blue-400`,
  button: `bg-blue-500 p-2 rounded text-white`,
  todoCount: `text-center p-4`,
}


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  // console.log(input);

  //add todo in firebase

  const addTodo = async (e) => {
    e.preventDefault();
    const text = input;
    if (text) {
      await addDoc(collection(db, "todos"), {
        text,
        completed: false
      });
    }
    setInput('')
  }

  //read todo from firebase

  useEffect(() => {
    //get todo from firebase
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoArray = []
      querySnapshot.forEach((doc) => {
        todoArray.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todoArray)
    });
    return () => unsubscribe()
  }, []
  )
  //update todo in firebase

  const toggle = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  }
  //delete todo in firebase

  const deleteText = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  }


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>ToDO App</h3>
        <form onSubmit={addTodo} className={style.form}>
          <input
            value={input}
            className={style.input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder='ADD TODO'
          />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggle={toggle}
              deleteText={deleteText}
            />
          ))}
        </ul>
        {todos.length < 1 ? <p className={style.todoCount}>No todos available</p> : <p className={style.todoCount}>{`You Have ${todos.length} Todos`}</p>}

      </div>


    </div>
  )
}

export default App
