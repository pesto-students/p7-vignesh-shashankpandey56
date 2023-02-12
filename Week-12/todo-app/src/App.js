import './App.css';
import {useState} from "react"

function App() {
  const [todos,setTodos] = useState([{text:"new to do app",completed:false},
  {text:"learn react",completed:false},
  {text:"learn node js",completed:false}])
  const addTodo = text => {
    const newTodos = [...todos, { text ,completed:false}];
    setTodos(newTodos);
};

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
 
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo,index) => (
          <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
            onClick={() => completeTodo(index)}
          >
            {todo.text}
          </div>
        ))}
          <div className="add-todo">
            <form onSubmit={e => {
              e.preventDefault();
              addTodo(e.target.elements.todo.value);
              e.target.elements.todo.value = "";
            }}>
              <input type="text" name="todo" />
              <button type="submit">Add Todo</button>
            </form>
          </div>
      </div>
    </div>
  );
  
}

export default App;
