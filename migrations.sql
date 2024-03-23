CREATE TABLE users (
    ID varchar(125) PRIMARY KEY, 
    email varchar(75) NOT NULL,
    first_name varchar(75), 
    last_name varchar(75), 
    created_at date NOT NULL DEFAULT CURRENT_DATE
); 

CREATE TABLE user_visits (
    visit_id SERIAL PRIMARY KEY, 
    user_id varchar(125) REFERENCES USERS(id) ON DELETE CASCADE, 
    visit_date DATE DEFAULT CURRENT_DATE
); 

ALTER TABLE USERS
ADD CONSTRAINT unique_email UNIQUE (email);