
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Guid } from "guid-typescript";
import { Client } from "pg";
import { CurioUser } from "../../models/user"
import { stringify } from "querystring";

interface UserRequest {
  email: string
}

export default async function handler(
  req: GatsbyFunctionRequest<UserRequest>,
  res: GatsbyFunctionResponse
) {
  const method  = req.method;
  const userEmail = req.params.email
  if (!userEmail) {
    res.status(400).send("Missing email parameter")
  }

  interface UserResponse {  
    status: string;  
    body: string; 
  }

  let response = { status: "success", statusCode: 200, body: "" };
  switch(method) { 
    case 'GETX': { 
      response = await getUser(userEmail);
      break;
    } 
    case 'POST': {  
       response = await addUser(userEmail);
       break;
    } 
    case 'DELETE': { 
       response = await deleteUser(userEmail); 
       console.log(response);
       break;
    }
    default: { 
       response = {status: "error", statusCode: 500, body: `Unsupported method:  ${method}`}; 
       break; 
    } 
  } 
  res.status(response.statusCode).json(JSON.parse(response.body));
}

async function getUser(userEmail: string) {
  let responseCode = 200;
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  const query = 
      `SELECT u.id, u.email, uv.visit_date
        FROM USERS u
        LEFT JOIN user_visits uv ON u.id = uv.user_id
        WHERE u.email = $1`;
  try {
      const results = await client.query(query, [userEmail]);
      let user = new CurioUser();
      let body = null;
      if (results.rows.length > 0) {
        user.id = results.rows[0].id;
        user.email = results.rows[0].email;
        user.visits = results.rows.map((row: { visit_date: string }) => row.visit_date);
        body = user;
      } else {
        body = {};
        responseCode = 404;
      }
      return {status: "success", statusCode: responseCode, body: JSON.stringify(body)};
  } catch (err) {
    return {status: "error", statusCode: 500, body: JSON.stringify(err)};
  } finally {
    client.end();
  }
}

async function addUser(userEmail: string) {
  const newId:string = Guid.create().toString();
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  
  const query = `INSERT INTO USERS (id, email) VALUES ($1, $2) RETURNING *;`
  try {
    const results = await client.query(query, [newId, userEmail]);
    return {status: "success", statusCode: 201, body: JSON.stringify(results.rows[0])};
  } catch (err) {
    return {status: "error", statusCode: 500, body: JSON.stringify(err)};
  } finally {
    client.end();
  }
}

async function deleteUser(userEmail: string) {
  const newId:string = Guid.create().toString();
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  const query = `DELETE FROM USERS WHERE email = $1;`
  try {
    const results = await client.query(query, [userEmail]);
    return {status: "success", statusCode: 204, body: "{}"};
  } catch (err) {
    return {status: "error", statusCode: 500, body: JSON.stringify(err)};
  } finally {
    client.end();
  }
}