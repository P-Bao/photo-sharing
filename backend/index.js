const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const upload = require("express-fileupload");
const dbConnect = require("./db/dbConnect");
const UserRouter = require("./routes/UserRouter");
const PhotoRouter = require("./routes/PhotoRouter");
const AdminRouter = require("./routes/AdminRouter");
const CommentRouter = require("./routes/CommentRouter");
const UploadRouter = require("./routes/UploadRouter");

dbConnect();

const imagesDirectory = path.join(__dirname, "images");

app.set("trust proxy", 1);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(upload());
app.use("/images", express.static(imagesDirectory));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60 * 1000,
    },
  })
);

function requireLogin(request, response, next) {
  const isPublicRegistration =
    request.method === "POST" && request.path === "/user";
  if (isPublicRegistration || request.path === "/") {
    return next();
  }
  if (!request.session.user) {
    return response.status(401).send("Unauthorized");
  }
  return next();
}

app.use("/admin", AdminRouter);
app.use(requireLogin);
app.use("/user", UserRouter);
app.use("/photosOfUser", PhotoRouter);
app.use("/photos", UploadRouter);
app.use("/commentsOfPhoto", CommentRouter);

app.get("/", (request, response) => {
  response.send({ message: "Hello from photo-sharing app API!" });
});

app.listen(8081, () => {
  console.log("server listening on port 8081");
});
