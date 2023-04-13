import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState(() => {
    const stareg = localStorage.getItem("arrow");
    return stareg ? JSON.parse(stareg) : [];
  });
  return (
    <div className="continer mo-auto">
      <form className='form block'>
        <input type='text' placeholder='firstName' className='block' />
        <input type='text' placeholder='lastname' className='block' />
        <input type='email' placeholder='Email' className='block' />
        <input type='password' placeholder='password' className='block' />
        <button className='btn block' type='submit'>
          register
        </button>
      </form>
    </div>
  );
};

export default TodoList;
