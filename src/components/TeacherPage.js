import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";

function TeacherPage() {
  const token = localStorage.getItem('token');
  const [teacher, setteacher] = useState({});
  const [studentUnderTeacher, setstudentUnderTeacher] = useState([{}]);
  const [studentRequestlist, setstudentRequestlist] = useState([{}]);

//get teacher info
  const getTeacher = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/uni_api/teacher/getTeacher",
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
    getTeacher();
  }, []);

  //get student under teacher list info
  const getStudentList = async () => {
    try {
      const responselist = await axios.get(
        "http://localhost:8080/uni_api/teacher/getAllStudent",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setstudentUnderTeacher(responselist.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get student request  list info
  const getStudentRequest = async () => {
    try {
      const responserequestlist = await axios.get(
        "http://localhost:8080/uni_api/teacher/getRequestList",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setstudentRequestlist(responserequestlist.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      
      <div style={{ textAlign: 'center', backgroundColor: '#73A9AD',color: 'white' }}>
       <h1>{teacher.name}</h1>
       <p>{teacher.email}</p>
       <p>{teacher.phone}</p>
      </div>

      <br/>
      <br/>

      <div style={{ textAlign: 'center', backgroundColor: '#DBDFAA',color: 'black' }}>
      <button onClick={getStudentList}>Show Students under my supervision</button>
      {studentUnderTeacher && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {studentUnderTeacher.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>

      <br/>
      <br/>

      <div style={{ textAlign: 'center', backgroundColor: '#B3C890',color: 'black' }}>
      <button onClick={getStudentRequest}>Show new Students request</button>
      {studentUnderTeacher && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {studentUnderTeacher.map((student) => (
              <tr key={student.id}>
                <td>{studentRequestlist.name}</td>
                <td>{studentRequestlist.email}</td>
                <td>{studentRequestlist.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>

      

    </div>
  );
    
}

export default TeacherPage;