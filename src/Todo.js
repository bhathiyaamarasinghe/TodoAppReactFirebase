import { ListItem ,ListItemText,Button} from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config';

export default function TodoListItem({todo,inprogress,id}) {

function toggleInprogress()
   { db.collection("todos").doc(id).update({
    inprogress: !inprogress
   })

}

function deleteTodo(){
    db.collection("todos").doc(id).delete()
}



    return (
        <div style={{display:"flex"}}>
           <ListItem>
               <ListItemText
                primary= {todo}
                secondary = {inprogress?"Inprogress":"Completed"}
               />
               </ListItem>
               <Button onClick={toggleInprogress}>
               {inprogress?"Done":"Undone"}
               </Button>
               <Button onClick={deleteTodo}>
                   Delete
               </Button>
        </div>
    )
}
