import { Employee, EmployeeCollection } from "../database/database";

class DBCompany {
  async getEmployees(): Promise<Employee[]> {
    try {
      const employees: Employee[] = await EmployeeCollection.find();
      return employees;
    } catch (error) {
      console.log("Error al obtener los empleados");
      return [];
    }
  }
}

export default DBCompany;
