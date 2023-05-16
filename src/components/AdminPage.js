import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./forAdmin/Headerr";


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

      <div style={{ textAlign: 'center', backgroundColor: '#73A9AD',color: 'white' }}>
       <h1>{admin.name}</h1>
       <h3>{admin.email}</h3>
       <h3>{admin.user?.roles[0]?.roleName}</h3>

      </div>


    </div>
  );
}

export default AdminPage;