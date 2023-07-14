const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "lakshay",
});


//-------------------- student commands ------------------

app.get("/api/StudentView/get", (req, res) => {
  const sql1 = "SELECT * FROM student_details";
  db.query(sql1, (error, results) => {
    res.send(results);
  });
});

app.post("/api/student/post", (req, res) => {
  const { S_name, S_id, S_course, S_ph_no, S_email, date_in, time_in } = req.body;

  const sqlInsert =
    "INSERT INTO student_details (S_name, S_id, S_course, S_ph_no, S_email, date_in, time_in) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [S_name, S_id, S_course, S_ph_no, S_email, date_in, time_in],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(400).send(error);
      } else {
        res.status(200).send(results);
      }
    }
  );
});

app.post("/api/studentExit/post", (req, res) => {
  const { S_id, date_out, time_out } = req.body;

  const sqlUpdate =
    "UPDATE student_details SET date_out = ?, time_out = ? WHERE S_id = ?";

  db.query(sqlUpdate, [date_out, time_out, S_id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      if (results.affectedRows === 0) {
        
        res.status(404).send("Student not found");
      } else {
        res.status(200).send(results);
      }
    }
  });
});

// ------------- Visitor commands -----------------
app.get("/api/VisitorView/get", (req, res) => {
  const sql1 = "SELECT * FROM visitor_details";
  db.query(sql1, (error, results) => {
    res.send(results);
  });
});

app.post("/api/visitor/post",(req,res) => {
    const {visitor_name, visitor_ph_no, address, no_of_person,  
      visitor_company, visiting_person_name,visiting_place, relationship,
       date_in, time_in, vehicle_no, purpose
     } = req.body
     
     const sqlInsert = 
     "insert into visitor_details (visitor_name, visitor_ph_no, address, no_of_person, visitor_company, visiting_person_name,visiting_place, relationship ,date_in, time_in, vehicle_no, purpose) values(?,?,?,?,?,?,?,?,?,?,?,?)"

     db.query(sqlInsert, [visitor_name, visitor_ph_no, address, no_of_person, visitor_company, visiting_person_name,visiting_place, relationship ,date_in, time_in, vehicle_no, purpose], (error, results) => {
        if(error) {
            console.log(error);
            res.status(400).send(error);
        }else{
                res.status(200).send(results);
            }
     })
})

app.post("/api/visitorExit/post", (req, res) => {
  const {visitor_ph_no, date_out, time_out } = req.body;

  const sqlUpdate = 
    " UPDATE visitor_details SET date_out = ?, time_out = ? WHERE visitor_ph_no = ? "

  db.query(sqlUpdate, [date_out, time_out, visitor_ph_no], (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      if (results.affectedRows === 0) {
        
        res.status(404).send("Visitor not found");
      } else {
        res.status(200).send(results);
      }
    }
  });
});

// ------------- Employee commands -----------------
app.get("/api/EmployeeView/get", (req, res) => {
  const sql1 = "SELECT * FROM employee_details";
  db.query(sql1, (error, results) => {
    res.send(results);
  });
});

app.post("/api/employee/post", (req, res) => {
  const { 
    emp_name, emp_id, emp_position, emp_phone, 
    date_in, time_in } = req.body;

  const sqlInsert = 
  "INSERT INTO employee_details (emp_name, emp_id, emp_position, emp_phone, date_in, time_in) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sqlInsert, [emp_name, emp_id, emp_position, emp_phone, date_in, time_in], (error, results) => {
      if (error) {
          console.log(error);
          res.status(400).send(error);
        }else{
            res.status(200).send(results);
        }
  });
});

app.post("/api/employeeExit/post", (req, res) => {
  const { emp_id, date_out, time_out } = req.body;

  const sqlUpdate =
    "UPDATE employee_details SET date_out = ?, time_out = ? WHERE emp_id = ?";

  db.query(sqlUpdate, [date_out, time_out, emp_id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      if (results.affectedRows === 0) {
        
        res.status(404).send("Employee not found");
      } else {
        res.status(200).send(results);
      }
    }
  });
});


app.post("/api/admin/login", (req, res) => {
  const { admin_name, admin_id, admin_password, admin_phone } = req.body;

  if (!admin_name || !admin_id || !admin_password || !admin_phone) {
    res.status(400).send("Please provide a value in all required fields");
    return;
  }


  const sqlCheckId = "SELECT * FROM admin_details WHERE admin_id = ?";
  db.query(sqlCheckId, [admin_id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send("An error occurred");
      return;
    }

    if (results.length === 0) {
     return res.status(409).send("Admin ID doesn't exists");
      
    }
    else{
      return res.status(200).send("success");
    }

  });
});



app.listen(4001, () => {
  console.log("Server is listening on port 4001");
});  