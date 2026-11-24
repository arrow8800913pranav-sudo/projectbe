import "dotenv/config";
import connectDB from "./db/connection.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(" Server running at: ", port);
    });

    app.on("error", (error) => {
      console.log(" Error while serving the app! \n", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("DB connection failed \n", error);
  });
