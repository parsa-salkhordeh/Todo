// Import useState hook from React and TodoList component
import {  useState } from "react";
import TodoList from "./TodoList";

// Main TodoForm component
export default function TodoForm(){
    // get the input.value with state
    const [value, setValue] = useState("");

    // list of todos,each item is an object with a 'title'
    const[list , setlist]=useState([
        {
            title:"زبان"
        }
    ]);

//  add items Button
   function HandleraddBtn(){
        if (value.trim() === "") {
            return;
        }
        setlist([
            ...list,
            {
                title:value
            }

        ])
        

        setValue("")
   }


//  Edit Items
     function HandleEdit(index) {
        let newTitle = prompt("عنوان جدید را وارد کنید:", list[index].title);
        if (newTitle !== null && newTitle.trim() !== "") {
            let newList = [...list];
            newList[index].title = newTitle;
            setlist(newList); 
        }
    }

    // Delet items
    function HandleDelete(index) {
        let newList = list.filter((_, i) => i !== index);
        setlist(newList); 
    }
    
    return(
        <>
            <h1 className="text-2xl font-bold">TO Do</h1>
            
            <div className="mt-3 flex">
                <input
                className="border rounded-md flex-grow p-3 focus:outline-none"
                type="text"
                placeholder="بیا ببینم امروز چیکار کردی"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}/>

                <button onClick={HandleraddBtn}  className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 transition">
                    اضافه کردن 
                </button>
            </div>
             <TodoList
                tasks={list}
                Edit={HandleEdit}
                Delete={HandleDelete}
            />
        </>
    )
    
}

    

    