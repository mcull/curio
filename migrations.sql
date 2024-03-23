CREATE TABLE users (
    ID varchar(125) PRIMARY KEY DEFAULT gen_random_uuid(), 
    email varchar(75) NOT NULL,
    first_name varchar(75), 
    last_name varchar(75), 
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
); 

ALTER TABLE USERS
ADD CONSTRAINT unique_email UNIQUE (email);

CREATE TABLE user_visits (
    visit_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    user_id varchar(125) REFERENCES USERS(id) ON DELETE CASCADE, 
    visit_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
); 

