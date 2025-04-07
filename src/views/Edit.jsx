import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router';
import HomeIcon from "./../assets/home.png";
import { useParams } from 'react-router';

function Edit() {

    const [student, setStudent] = useState({
        id: "",
        name: "",
        city: "",
    });

    const { userId } = useParams();

    const editStudents = async() =>{
        try {
        const response = await axios.put(`http://localhost:5002/students/${userId}`,{
            // id: student.id,
            name: student.name,
            city: student.city,
        });
        if(response.data.success){
            // setStudent({
            //     id: "",
            //     name: "",
            //     city: "",
            // });
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }
    } catch (e) {
        toast.error(e.response.data.message);
    }
    };

    const loadStudent = async ()=>{
        //console.log(`Loding student with id: ${userId}`);
        try{
            const response = await axios.get(`http://localhost:5002/students/${userId}`);
            setStudent(response.data.data);
        }
        catch(e){
            toast.error(e.response.data.message);
        }
    };

    useEffect(()=>{
        if(userId){
            loadStudent();
        }
    }, [userId]);

  return (
    <div>
        <h1 className="text-center text-5xl my-4">Edit Students ({userId})</h1>

        <div className="w-2/2 md:w-3/5 mx-auto shadow-md m-5 p-5 rounded-md border-2 border-gray-200 bg-white">
            <Link to="/"><img src={HomeIcon} alt="" className="h-[30px] cursor-pointer"/></Link>
            <input 
            type="text" 
            placeholder="Enter ID"
            value={student.id} 
            onChange={(e)=> setStudent({...student, id: e.target.value})}
            className="block mx-auto md:text-2xl text-xl w-82 md:w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
            disabled
            />

            <input 
            type="text" 
            placeholder="Enter Name" 
            value={student.name}
            onChange={(e)=> setStudent({...student, name: e.target.value})}
            className="block mx-auto md:text-2xl text-xl w-82 md:w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
            />

            <input 
            type="text" 
            placeholder="Enter City"
            value={student.city} 
            onChange={(e)=> setStudent({...student, city: e.target.value})}            
            className="block mx-auto md:text-2xl text-xl w-82 md:w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
            />

            <button className="bg-blue-500 text-xl px-10 py-2 rounded-full text-white block mx-auto cursor-pointer hover:bg-blue-600 mt-10 mb-2"
            onClick={editStudents}>Edit Student</button>

        </div>
        <Toaster/>
    </div>
  )
}

export default Edit;