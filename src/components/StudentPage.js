import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function StudentPage() {
  const token = localStorage.getItem('token');
  const [student, setstudent] = useState({});

  const studentlist = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/uni_api/student/getStudent/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setstudent(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    studentlist();
  }, []);


  return (
    <div>
      <h1>Student Page</h1>
      <div style={{ textAlign: 'center', backgroundColor: '#73A9AD',color: 'white' }}>
       <h1>Name: {student.name}</h1>
       <p>Email: {student.email}</p>
       <p>Phone: {student.phone}</p>
       <p>Advisor Name: Dr.{student.teacher.name} </p>
      </div>

    </div>
  );
}

export default StudentPage;
