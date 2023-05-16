import React from 'react';
import { Link  } from 'react-router-dom';



function Headerr() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', backgroundColor: '#F3E8FF',color: 'black'}}>
        <li>
            <Link to="/admin/addstudent">Add Student</Link>
            
          </li>
          <li>
            <Link to="/admin/studentlist">Student List</Link>
          </li>
          <li>
            <Link to="/admin/addteacher">Add Teacher</Link>
          </li>
          <li>
            <Link to="/admin/teacherlist">Teacher List</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Headerr;

