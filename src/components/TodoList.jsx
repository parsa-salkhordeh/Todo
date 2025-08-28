import TodoItem from './TodoItem'

export default function TodoList({tasks, Edit , Delete}){
    return(
        <ul className="list-none bg-gray-200 mt-3 rounded-md p-3 text-right">
                {/* Todos list */}
                {tasks.map((item, index) => (
                <TodoItem
                    key={index}
                    todolistLi={item.title}

                    Edit={()=>Edit(index)}
                    Delete={()=>Delete(index)}
                    
                />
                ))}
            
        </ul>
    )
}

