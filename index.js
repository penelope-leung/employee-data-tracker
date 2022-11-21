const inquirer = require("inquirer");
const fs = require("fs");
const db = require("./config/connections");
const { allowedNodeEnvironmentFlags } = require("process");
require("console.table");

var otherQuestions = [
  {
    type: "input",
    name: "newDepartment",
    message: "What is the name of department?",
    validate: (answer) => {
      if (answer !== "") {
        console.log(`Add ${answer} to the database (toDo)`);
        return true;
      }

      return "Please enter at least one character.";
    },
  },
  {
    type: "input",
    name: "newRole",
    message: "What is the name of role?",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "input",
    name: "roleSalary",
    message: "What is the salary of the role?",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one number.";
    },
  },
  {
    type: "list",
    name: "department",
    message: "What department does the role belong to?",
    choices: ["Engineering", "Finance", "Legal", "Sales", "Service"],
    validate: (answer) => {
      if (answer !== "") {
        return `Add ${department} to the database`(toDo);
      }
      return "Please choose one";
    },
  },
  {
    type: "input",
    name: "newEmployeeFirstName",
    message: "What is the employee's first name?",
    validate: (answer) => answer,
  },
  {
    type: "input",
    name: "newEmployeeLastName",
    message: "What is the employee's last name?",
    validate: (answer) => {
      if (answer !== true) {
        return newEmployeeLastName;
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "list",
    name: "employeeRole",
    message: "What the employee's role?",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "lead Team Lead",
      "lawyer",
    ],
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please choose one";
    },
  },
  {
    type: "list",
    name: "employeeManager",
    message: "Who the employee's manager?",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
    ],
    validate: (answer) => {
      if (answer !== "") {
        return `Add ${newEmployeeName} to the database`(toDo);
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "list",
    name: "updateEmployee",
    message: "Which employee's do you want to update?",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
    ],
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please choose one";
    },
  },
  {
    type: "list",
    name: "assignManager",
    message: "Which role do you want to assign the selected employee?",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "lead Team Lead",
      "lawyer",
    ],
    validate: (answer) => {
      if (answer !== "") {
        return "Updated employee's role"(toDo);
      }
      return "Please choose one";
    },
  },
]
//function to prompt questions
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "toDo",
        message: "What would you like to do?",
        choices: [
          "View All Employee",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Department",
          "Add Department",
          "Quit",
        ],
        validate: (answer) => {
          if (
            (answer !== "View All Employee",
            "View New Roles",
            "View All Department")
          ) {
            console.table(result(toDo));
          } else if (answer !== "Quit") {
            console.log("Goodbye!");
          }
          return "Please choose one";
        },
      },
      
    ])
    //pick a thing to do
    .then((answers) => {
      switch (answers.toDo) {
        case "View All Employee":
          viewEmployee();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "View New Roles":
          viewRoles();
          break;
        case "Add Role":
          addRoles();
          break;
        case "View All Department":
          viewDepartment();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Quit":
          quit();
          break;
      }

      console.log("answers", answers);
    });
}


//function return after choose a answer
function viewEmployee() {
    db.promise()
    .query("SELECT * FROM employee")
    .then(([rows]) => {
      console.table(rows);
    });
}
function addEmployee() {
    inquirer.prompt({
      type: "input",
      name: "first_name",
      message: "What is the first name of employee?",
      validate: (answer) => {
        if (answer !== "") {
          console.log(`Add ${answer} to the database (toDo)`);
          return true;
        }
  
        return "Please enter at least one character.";
      },
      
    },).then(answers => {
      console.log("need to finish function");
      db.promise()
        .query("INSERT INTO employee SET ?", answers)
        .then(([rows]) => {
          console.table(rows);
        });
    })
}
function updateRole() {
  console.log("need to finish function");
  db.promise()
    .query("SELECT * FROM employee")
    .then(([rows]) => {
      console.table(rows);
    });
}
function viewRoles() {
    db.promise()
    .query("SELECT * FROM roles")
    .then(([rows]) => {
      console.table(rows);
    });
}
function newRole() {
  console.log("need to finish function");
  db.promise()
    .query("SELECT * FROM employee")
    .then(([rows]) => {
      console.table(rows);
    });
}
function viewDepartment() {
   db.promise()
    .query("SELECT * FROM departments")
    .then(([rows]) => {
      console.table(rows);
    });
}
function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is the name of department?",
    validate: (answer) => {
      if (answer !== "") {
        console.log(`Add ${answer} to the database (toDo)`);
        return true;
      }

      return "Please enter at least one character.";
    },
  },).then(answers => {
    console.log("need to finish function");
    db.promise()
      .query("INSERT INTO department SET ?", answers)
      .then(([rows]) => {
        console.table(rows);
      });
  })
}
function quit() {
  console.log("Quit");
}

init();
