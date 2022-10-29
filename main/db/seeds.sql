INSERT INTO departments (department_name)
VALUES ("Finace Team"),
       ("Technical Team"),
       ("Legel Team"),
       ("Sales Team");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, "Sales"),
       ("Salesperson", 80000, "Sales"),
       ("Lead Engineer", 150000, "Engineering"),
       ("Software Engineer", 120000, "Engineering"),
       ("Account Manager", 160000, "Finance"),
       ("Accountant", 125000, "Fianace"),
       ("Legal Team Lead", 250000, "Legal"),
       ("Lawyer", 190000, "Leagl");
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES VALUES   ("John", "Doe", 1, ""),
                ("Mike","Chan", 2, 1),
                ("Ashley","Rodriguez", 3, ""),
                ("Kevie", "Tupik", 4, ""),
                ("Kunal","Singh", 5, ""),
                ("Malia","Lourd", 6, ""),
                ("Sarah", "Brown", 7, ""),
                ("Tom", "Allen", 8, "");
