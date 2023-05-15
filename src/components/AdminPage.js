import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./forAdmin/Headerr";
import AddStudent from './forAdmin/AddStudent';
import StudentList from "./forAdmin/StudentList";
import AddTeacher from './forAdmin/AddTeacher';
import TeacherList from "./forAdmin/TeacherList";
import {BrowserRouter,Routes,Route, Router} from "react-router-dom";

function AdminPage() {
  const token = localStorage.getItem('token');
  const [admin, setadmin] = useState({});

//get admin info
const getadmin = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/uni_api/admin/get",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setadmin(response.data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  getadmin();
}, []);

console.log(admin);

  return (
    <div>
      
      
      
      <Header />
      {/* <Routes>
        <Route exact path="/addstudent"  element={<AddStudent />} />
        <Route path="/studentlist"  element={<StudentList />} />
        <Route path="/addteacher"  element={<AddTeacher />} />
        <Route path="/teacherlist"  element={<TeacherList />} />
      </Routes> */}

      
    

      
      
      <div style={{ textAlign: 'center', backgroundColor: '#73A9AD',color: 'white' }}>
       <h1>{admin.name}</h1>
       <h3>{admin.email}</h3>
       <h3>{admin.user?.roles[0]?.roleName}</h3>

      </div>


    </div>
  );
}

export default AdminPage;