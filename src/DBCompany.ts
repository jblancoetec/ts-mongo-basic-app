import { Employee, EmployeeCollection } from "../database/database";

class DBCompany {
  async getEmployees(): Promise<Employee[]> {
    try {
      const employees: Employee[] = await EmployeeCollection.find();
      return employees;
    } catch (error) {
      console.log(error);
      const employees: Employee[] = [];
      return employees;
    }
  }
}

export default DBCompany;
