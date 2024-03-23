
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Guid } from "guid-typescript";
import { Client } from "pg";
import { CurioUserVisit } from "../../models/user_visits"

interface UserVisitRequest {
  id: string
}

export default async function handler(
  req: GatsbyFunctionRequest<UserVisitRequest>,
  res: GatsbyFunctionResponse
) {
  const method  = req.method;
  const userId = req.params.id
  if (!userId) {
    res.status(400).send("Missing email parameter")
  }

  interface UserResponse {  
    status: string;  
    body: string; 
  }

  let response = { status: "success", statusCode: 200, body: "" };
  switch(method) { 
    case 'GET': { 
      response = await getUserVisits(userId);
      break;
    } 
    case 'POST': {  
      response = await addUserVisit(userId);
      break;
    } 
    case 'DELETE': { 
      const userVisitId = BigInt(userId);
      response = await deleteUserVisit(userVisitId); 
      break;
    }
    default: { 
       response = {status: "error", statusCode: 500, body: `{Unsupported method:  ${method}}`}; 
       break; 
    } 
  } 
  res.status(response.statusCode).json(JSON.parse(response.body));
}

async function getUserVisits(userId: string) {
  let responseCode = 200;
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  console.log(userId);
  const query = 
      `SELECT uv.visit_id, uv.user_id, uv.visit_date
        FROM USER_VISITS uv
        WHERE uv.user_id = $1`;
  try {
    let body = {};
      const results = await client.query(query, [userId]);
      console.log(results);
      if (results.rows.length > 0) {
        body = results.rows;
      } else {
        responseCode = 404;
      }
      return {status: "success", statusCode: responseCode, body: JSON.stringify(body)};
  } catch (err) {
    return {status: "error", statusCode: 500, body: JSON.stringify(err)};
  } finally {
    client.end();
  }
}

async function addUserVisit(userId: string) {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  
  const query = `INSERT INTO USER_VISITS (user_id) VALUES ($1) RETURNING *;`
  try {
    const results = await client.query(query, [userId]);
    return {status: "success", statusCode: 201, body: JSON.stringify(results.rows[0])};
  } catch (err) {
    return {status: "error", statusCode: 500, body: JSON.stringify(err)};
  } finally {
    client.end();
  }
}

async function deleteUserVisit(userVisitId: bigint) {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  const query = `DELETE FROM USER_VISITS WHERE visit_id = $1;`
  try {
    
    const results = await client.query(query, [userVisitId]);
    console.log(results);
    return {status: "success", statusCode: 200, body: "{}"};
  } catch (err) {
    return {status: "error", statusCode: 500, body: JSON.stringify(err)};
  } finally {
    client.end();
  }
}