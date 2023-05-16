import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import TeacherPage from './components/TeacherPage';
import StudentPage from './components/StudentPage';
import AddStudent from './components/forAdmin/AddStudent';
import StudentList from './components/forAdmin/StudentList';
import AddTeacher from './components/forAdmin/AddTeacher';
import TeacherList from './components/forAdmin/TeacherList';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/admin/addstudent"  element={<AddStudent />} />
        <Route path="/admin/studentlist"  element={<StudentList />} />
        <Route path="/admin/addteacher"  element={<AddTeacher />} />
        <Route path="/admin/teacherlist"  element={<TeacherList />} />
      </Routes>
    
  );
}

export default App;
