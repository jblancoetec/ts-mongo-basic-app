import { MongoClient } from "mongodb";

export const createDB = async (client: MongoClient) => {
  try {
    await client.connect();
    const db = client.db("company");
    const collection = db.collection("employees");
    await collection.insertMany([
      {
        name: "Ryan Ray",
        salary: 20000,
      },
      {
        name: "John McMillan",
        salary: 40000,
      },
      {
        name: "John Carter",
        salary: 50000,
      },
    ]);
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
