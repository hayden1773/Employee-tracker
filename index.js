const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require ('inquirer');



// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
  
);
menu()

function menu() {
  inquirer.prompt({

    type: "list",
    name: "choice",
    message: "select department",
    choices: ["View Employees","View Department","View Roles"]

  }).then(function({choice}) {
    console.log(choice)
    if (choice === "View Employees"){
      db.query("SELECT * FROM employee",(err,data) =>{
        console.table(data)
        console.log(err)
        menu()
      })
    }else if (choice === "View Department"){
      db.query("SELECT * FROM department", (err,data)=> {
        console.table(data)
        console.log(err)
        menu()
      })
    }else if (choice === "View Roles"){
      db.query("SELECT * FROM role", (err,data)=> {
        console.table(data)
        console.log(err)
        menu()
  }) 
    }})}