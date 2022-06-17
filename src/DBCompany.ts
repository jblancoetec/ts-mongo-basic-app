import { MongoClient } from "mongodb";

class DBCompany {
  private readonly uri: string;

  constructor() {
    this.uri = process.env.URIDB || "mongodb://localhost:27017";
  }

  async getEmployees() {
    const client = new MongoClient(this.uri);
    try {
      await client.connect();
      const db = client.db("company");
      const collection = db.collection("employees");
      const employees = await collection.find({}).toArray();
      return employees;
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  }
}

export default DBCompany;
