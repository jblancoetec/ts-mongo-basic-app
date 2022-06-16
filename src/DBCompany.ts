import { connect, connection } from "mongoose";
import { Employee, EmployeeCollection } from "../database/database";

class DBCompany {
  private readonly uridb: string;
  constructor() {
    this.uridb = process.env.URIDB || "mongodb://localhost:27017/test";
  }

  async getEmployees(): Promise<Employee[] | undefined> {
    try {
      await connect(this.uridb, {});
      const employees: Employee[] = await EmployeeCollection.find();
      return employees;
    } catch (error) {
      console.log(error);
    } finally {
      await connection.close();
    }
  }
}

export default DBCompany;
