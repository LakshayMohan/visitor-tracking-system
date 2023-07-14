import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"  ;
import UserType from "./pages/usertype";

import Main from "./pages/main"
import "./App.css";
import Visitform from "./pages/VisitorForm";
import Studentform from "./pages/StudentForm";
import Employeeform from "./pages/EmployeeForm";
import VisitPass from "./pages/visitPass";
import VisitorExit from "./pages/visitorExit";
import AdminPass from "./pages/AdminPass";
import EmpPass from "./pages/employeePass";
import EmpExit from "./pages/employeeExit";
import StudentPass from "./pages/studentPass";
import StuExit from "./pages/studentExit";
import StudentView from "./pages/StudentView";
import Dashboard from "./pages/Dashboard";
import EmployeeView from "./pages/EmployeeView";
import VisitorView from "./pages/VisitorView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/usertype" element={<UserType/>} />
          <Route path = "/admin" element ={<AdminPass/>}/>
          
          

          <Route path="/stu" element = {<StudentPass/>}/>
          <Route path="/student" element = {<Studentform/>}/>
          <Route path="/stuExit" element = {<StuExit/>}/>
          <Route path="/studentPass" element = {<StudentPass/>}/>
          
          <Route path="/visit" element = {<VisitPass/>}/>
          <Route path="/visitor" element = {<Visitform/>}/>
          <Route path="/visitorExit" element = {<VisitorExit/>}/>
          <Route path="/visitPass" element = {<VisitPass/>}/>

          <Route path="/emp" element = {<EmpPass/>}/>
          <Route path="/employee" element = {<Employeeform/>}/>
          <Route path="/empExit" element = {<EmpExit/>}/>
          <Route path="/EmpPass" element = {<EmpPass/>}/>

          <Route path="/AdminPass" element = {<AdminPass/>}/>

          <Route path="/Dashboard" element = {<Dashboard/>}/>
          <Route path = "/StudentView" element ={<StudentView/>}/>
          <Route path = "/EmployeeView" element ={<EmployeeView/>}/>
          <Route path = "/VisitorView" element ={<VisitorView/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
