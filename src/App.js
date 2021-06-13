
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState , useEffect} from 'react';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';
function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    getTodos();
    console.log(todos);
  }, [])

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(querySnapshot.docs.map((doc) => (
        {
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }
      )))
    })
  }

  function addtodo(e) {
    e.preventDefault();

    console.log("bsbadkjsa");
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    })

    setTodoInput("");

  }


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column",width:"100%" }}>
      <div>

        <h1>Bhathiya's To Do App</h1>
        </div>
        <form>
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setTodoInput(e.target.value)
          }
          value={todoInput}
          label="Enter your to do"
          style={{ maxWidth: "500px", width: "90vw" }} />
        <Button type="submit" variant="contained" style={{display:"none"}} onClick={addtodo}>Submit</Button>
  
      
       </form>
       </div>
       <div style={{ display: "flex",flexDirection:"column",alignItems :"center" }}>
       {todos.map((todo)=>(
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
       )  
       )}
       </div>
      
    </div>
  );
}

export default App;
