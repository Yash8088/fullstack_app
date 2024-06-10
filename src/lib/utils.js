import mongoose from "mongoose";
const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      //use this if there already is a connection , use existing connection
      console.log("Using existed connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO); //if theres no connectioin then create a new one
    connection.isConnected = db.connections[0].readystate; //update connection
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
