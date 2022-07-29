const userRouter = require("../routers/userRouter");

module.exports = (app) => {
  app.use("/api/user", userRouter);
 
};