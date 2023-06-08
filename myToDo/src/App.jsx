import React, { useState } from "react";

function App() {
const [todos, setTodos] = useState(
  [
    {
       text: "Купить бананы",
       favorite: true,
     },
     {
       text: "Продать квартиру",
       favorite: false,
     },
     {
       text: "Учить JS",
       favorite: true,
     }
    ]);

    const [text, setText] = useState("");

  const deleteTodo = (i) => {
    const filtered =todos.filter((todo, index) => {
      if (index === i){
        return false
      }
    
      return true

  });

  setTodos(filtered);
}


const makeFavorite = (i) => {
  const newTodos = todos.map((item, index) => {
    if(i === index) {
      return {
        ...item,
        favorite: !item.favorite
      };
    }

    return item;
  });

  setTodos(newTodos);
}





  const newTodos = todos.map((todo, index) => {
    return (
      <div className={`todo ${todo.favorite ? 'selected' : ""}`}>
            <div className="favorite">
              <button onClick={() => makeFavorite(index)}>⋆</button>
            </div>
            <div className="todo-text">
              {todo.text}
            </div>
            <div className="actions">
              <button onClick={() => deleteTodo(index)}>x</button>
            </div>
      </div>
    )
  });

  const addTodo = () => {
    setTodos([{
      text,
      favorite: false
    },...todos
  ]);

  setText("")
  
  }


  return (
    <>
      <div className="app">
        <div className="header">
          listDo
        </div>
        <div className="form">
          <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => addTodo()}>
            Добавить
          </button>
        </div>
        <div className="todos">
          {newTodos}
        </div>
      </div>
    </>
  )
  }


export default App;