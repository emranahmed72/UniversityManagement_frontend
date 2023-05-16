import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function StudentList() {
  const token = localStorage.getItem('token');
  const [student, setstudent] = useState();

  const studentlist = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/uni_api/admin/getAllStudent",
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
  
  //console.log(response);



  return (
    <div>
      
      <h1 style={{ textAlign: 'center', backgroundColor: '#DBDFAA',color: 'black' }}> Student List </h1>


      <div style={{ textAlign: 'center', backgroundColor: '#DBDFAA',color: 'black' }}>
      
      {student && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Dept.</th>
            </tr>
          </thead>
          <tbody>
            {student.map((studentVal) => (
              <tr key={studentVal.id}>
                <td>{studentVal.name}</td>
                <td>{studentVal.email}</td>
                <td>{studentVal.phone}</td>
                <td>{studentVal.department.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>



    </div>
    
  );
}

export default StudentList