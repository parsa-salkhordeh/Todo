import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export default function TodoItem({todolistLi , Edit , Delete}){
    return(
        <li className="py-1 border-b border-gray-400 last:border-0 flex justify-between items-center">
             {/* Display todo title */}
            <span className="flex-grow text-right">{todolistLi}</span>
            <div className="flex gap-2">
                <button onClick={Edit} className="text-blue-500 hover:text-red-700">ویرایش</button>
                {/* Trash icon from FontAwesome */}
                <button onClick={Delete} className="hover:text-red-700"><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        </li>
    )
}