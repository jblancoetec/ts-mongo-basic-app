import { MongoClient } from "mongodb";

export type Employee = {
  name: string;
  salary: number;
};

export type EmployeeWithID = Employee & {
  _id: string;
};

const employees: Employee[] = [
  { name: "Ryan Ray", salary: 50000 },
  { name: "John Doe", salary: 100000 },
  { name: "Jane Doe", salary: 200000 },
];

export const createDB = async (client: MongoClient) => {
  try {
    await client.connect();
    const db = client.db("company");
    const collection = db.collection("employees");
    await collection.insertMany(employees);
  } catch (err) {
    console.log(err);
  }
};

export const destroyDB = async (client: MongoClient) => {
  try {
    const db = client.db("company");
    const collection = db.collection("employees");
    await collection.deleteMany({});
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};
