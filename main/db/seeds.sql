INSERT INTO departments (name)
VALUES ("Finace Team"),
       ("Technical Team"),
       ("Legel Team"),
       ("Sales Team");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Salesperson", 80000, 4),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 1),
       ("Accountant", 125000, 1),
       ("Legal Team Lead", 250000, 3),
       ("Lawyer", 190000, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Mike","Chan", 2, 1),
       ("Ashley","Rodriguez", 3, NULL),
       ("Kevie", "Tupik", 4, 3),
       ("Kunal","Singh", 5, NULL),
       ("Malia","Lourd", 6, 5),
       ("Sarah", "Brown", 7, NULL),
       ("Tom", "Allen", 8, 7);
