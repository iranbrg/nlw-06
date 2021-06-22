import { createConnection } from "typeorm";

createConnection()
    .then(() => console.log("Succesfully connected to the database"))
    .catch(err => console.log(err));
