import { app } from "./app";
import { Configurations } from "./config";

import { connectDatabase } from "./database/connection";

const bootstrapServer = async () => {
  await connectDatabase();

  app.listen(Configurations.PORT, () => {
    console.log("Listening on 4000!");
  });
};

bootstrapServer();
