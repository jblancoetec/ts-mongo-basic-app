import { MongoClient } from "mongodb";

export const createDB = async () => {
  const uri = process.env.URIDB || "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("company");
    const collection = db.collection("employees");
    await collection.insertMany([
      {
        id: 1,
        name: "Ryan Ray",
        salary: 20000,
      },
      {
        id: 2,
        name: "John McMillan",
        salary: 40000,
      },
      {
        id: 3,
        name: "John Carter",
        salary: 50000,
      },
    ]);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

export const destroyDB = async () => {
  const uri = process.env.URIDB || "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("company");
    const collection = db.collection("employees");
    await collection.deleteMany({});
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};
