import React from "react";
import { FaEdit } from 'react-icons/fa';

export const TodoUpdate = () => {
    return(
        <form>
            <input 
            type="text" 
            className="nput-update" 
            name="description" 
            value="Aprender php" 
            placeholder="¿Qué hay que hacer?" 
            
            />

            <button className="btn-edit" type="submit">
                <FaEdit />
            </button>

        </form>
    )
}