import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function TeacherList() {
    const token = localStorage.getItem('token');
    const [teacher, setteacher] = useState([]);

    
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
    <div>
      
      <h1 style={{ textAlign: 'center', backgroundColor: '#DBDFAA',color: 'black' }}> TeacherList </h1>


      <div style={{ textAlign: 'center', backgroundColor: '#DBDFAA',color: 'black' }}>
      
      {teacher && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((teacherVal) => (
              <tr key={teacherVal.id}>
                <td>{teacherVal.name}</td>
                <td>{teacherVal.email}</td>
                <td>{teacherVal.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>



    </div>
    
  );
}

export default TeacherList