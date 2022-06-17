import { Db } from "mongodb";
import { Employee } from "../database/database";

class DBCompany {
  constructor(private readonly db: Db) {}

  async getEmployees(): Promise<Employee[]> {
    const collection = this.db.collection("employees");
    const documents = await collection.find({}).toArray();
    const employees: Employee[] = documents.map((document) => ({
      name: document.name,
      salary: document.salary,
    }));
    return employees;
  }
}

export default DBCompany;
