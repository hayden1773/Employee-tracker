Use employee_db;

INSERT INTO department (department_name)
VALUES ("Sales floor"),
        ("Engineering"),
        ("Software Engineer"),
        ("Legal"),
        ("Accounting");
    

INSERT INTO role (title,salary,deparment_id)
VALUES ("sales", 50000, 1),
        ("Lead Engineer", 80000, 2),
        ("Software specialist", 75000, 2),
        ("Legal Advisor", 100000, 4),
        ("Account Manager", 20000, 5)
       
;

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Obi-wan","Kenobi", 1, NULL),
        ("Mace","Windu", 1, 1),
        ("dare","devil", 2, 2),
        ("hello","world", 4, 3)
       
;