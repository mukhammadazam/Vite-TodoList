import { useState } from "react";
import "./Todo.scss";
const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const storeg = localStorage.getItem("erray");
    return storeg ? JSON.parse(storeg) : [];
  });
  const [nTodo, setNtodo] = useState("");
  const [nTodo1, setNtodo1] = useState("");
  const [nTodo2, setNtodo2] = useState("");
  const [nTodo3, setNtodo3] = useState("");
  const eventCHange = (e) => {
    setNtodo(e.target.value);
  };
  const eventCHange1 = (e) => {
    setNtodo1(e.target.value);
  };
  const eventCHange2 = (e) => {
    setNtodo2(e.target.value);
  };
  const eventCHange3 = (e) => {
    setNtodo3(e.target.value);
  };
  const submitFun = (e) => {
    e.preventDefault();
    if (!nTodo.trim() && nTodo1.trim() && nTodo3.trim() !== nTodo2.trim())
      return;
    setTodo([
      ...todo,
      { 
        id: Date.now(),
        text: nTodo,
        email: nTodo1,
        password: nTodo2,
        conPassword: nTodo3,
      },
    ]);
    setNtodo("");
    setNtodo1("");
    setNtodo2("");
    setNtodo3("");
  };
  localStorage.setItem("erray", JSON.stringify(todo));
  const delFun = (id) => {
    const deleteUp = todo.filter((el) => el.id !== id);
    setTodo(deleteUp);
  };

  return (
    <div className='container pt-5'>
      <form onSubmit={submitFun} className='block form'>
        <input
          className='block p-3 ps-4 mb-3'
          placeholder='First Name'
          type='text'
          value={nTodo}
          onChange={eventCHange}
        />
        <input
          className='block p-3 ps-4 mb-3'
          onChange={eventCHange1}
          value={nTodo1}
          placeholder='Email'
          type='email'
        />
        <input
          className='block p-3 ps-4 mb-3'
          onChange={eventCHange2}
          value={nTodo2}
          placeholder='Password'
          type='password'
        />
        <input
          className='block p-3 ps-4 mb-3'
          onChange={eventCHange3}
          value={nTodo3}
          placeholder='Conform Password'
          type='password'
        />
        <button className='form__btn block rounded'>Add</button>
      </form>

      <div className='grid row grid-cols-4 gap-4 pb-5 '>
        {todo.map((element) => (
          <div className='row__enner ' key={element.id}>
            <p className='text-center row__item'>{element.text}</p>
            <h6 className='text-center row__item '>{element.email}</h6>
            <h3 className='text-center row__item'>{element.conPassword}</h3>
            <h2 className='text-center row__item'>{element.password}</h2>
            <h1 className='text-center row__item'>author:Mukhammad A'zam</h1>
            <button
              className=' row__btn rounded'
              onClick={() => delFun(element.id)}>
              delete
            </button>
            <button
              className=' row__btn mt-2 rounded'
              onClick={() => delFun(element.id)}>
              editBtn
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
