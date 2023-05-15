import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function TeacherList() {
    const token = localStorage.getItem('token');
    const [teacher, setteacher] = useState({});

    
//get teacher info
const teacherlist = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/uni_api/admin/getAllTeach",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setteacher(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    teacherlist();
  }, []);
  
  console.log(teacher);





  return (
    <div>TeacherList</div>
  );
}

export default TeacherList