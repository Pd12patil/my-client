import React, { useEffect, useState } from 'react'
import StudentCard from './../components/StudentCard';
import axios from 'axios';
import { Link } from 'react-router';
import addusericon from "./../assets/adduser.png"
function Home() {

    const [students, setStudents] = useState([
        // {
        //     "id": 1,
        //     "name": "Patil",
        //     "city": "Pune"
        // },
        // {
        //     "id": 2,
        //     "name": "AK",
        //     "city": "Nagpur"
        // },
        // {
        //     "id": 5,
        //     "name": "g",
        //     "city": "nagpur"
        // },
    ]);

    const loadStudents = async() => {
        const response = await axios.get("https://my-server-q054.onrender.com/students");
        setStudents(response.data.data);
    }

    useEffect(()=>{
        loadStudents()
    }, [])
  return (
    <div>
        <h1 className="text-center text-6xl my-4">All Students</h1>
        <div>
            {students.map((stuObj, i)=>{

                const { id, name, city } = stuObj;

                return <StudentCard key={i} id={id} name={name} city={city} loadStudents={loadStudents} />;
            })}
        </div>
        <Link to="/add">
            <img src={addusericon} alt="Add User" className="h-[50px] fixed bottom-5 right-5 cursor-pointer" />
        </Link>
    </div>
  )
}

export default Home