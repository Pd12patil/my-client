import React from "react";
import { Link } from "react-router";
import axios from "axios";
import TrashIcon from "./../assets/bin.png";
import toast, {Toaster} from "react-hot-toast";
import EditIcon from "./../assets/edit.png";

function StudentCard({id, name, city, loadStudents}) {

  const deleteStudent = async()=> {
    const response = await axios.delete(`https://my-server-q054.onrender.com/students/${id}`);
    if(response.data.success){
      toast.success(response.data.message);
      loadStudents();
    }
    else{
      toast.error(response.data.message);
    }
  }

  return (
    <div className="border-2 border-gray-300 p-4 m-4 rounded-md shadow-md relative">
      <h2 className="text-2xl">
        {id} - {name}
      </h2>
      <p>{city}</p>

      <img 
      src={TrashIcon} 
      alt="Delete" 
      className="h-[28px] cursor-pointer absolute top-2 right-5" 
      onClick={deleteStudent} 
      />

      <Link to={`/edit/${id}`}>
      <img 
      src={EditIcon} 
      alt="Edit Student" 
      className="h-[28px] cursor-pointer absolute bottom-3 right-5"  
      />
      </Link>

      <Toaster/>
    </div>
  );
}

export default StudentCard;
