import { Db } from "mongodb";

export type Employee = {
  _id: string;
  name: string;
  salary: number;
};

class DBCompany {
  constructor(private readonly db: Db) {}

  async getEmployees(): Promise<Employee[]> {
    try {
      const collection = this.db.collection("employees");
      const documents = await collection.find({}).toArray();
      const employees: Employee[] = documents.map((document) => {
        return {
          _id: document._id.toString(),
          name: document.name,
          salary: document.salary,
        };
      });
      return employees;
    } catch {
      console.log("Error al obtener los empleados");
      return [];
    }
  }
}

export default DBCompany;
