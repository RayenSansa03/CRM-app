require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { expressjwt: jwt } = require("express-jwt");

const clientRoute = require("./routes/client.route");
const projectRoute = require("./routes/project.route");
const equipRoute = require("./routes/equipment.route");
const reservationRoute = require("./routes/reservation.route");
const taskRoute = require("./routes/task.route");
const qrRoute = require("./routes/qr.route");
const employeRoutes = require("./routes/employe.route");
const salleRoute = require("./routes/salle.route");
const formationRoute = require("./routes/formation.route");
const authRoutes = require("./routes/auth.route");

const app = express();

// Vérification des variables d'environnement
if (
  !process.env.JWT_SECRET ||
  !process.env.MONGO_URI ||
  !process.env.EMAIL_USER ||
  !process.env.EMAIL_PASS
) {
  console.error(
    "Les variables d'environnement sont manquantes. Assurez-vous que le fichier .env est configuré correctement."
  );
  process.exit(1);
}

// Middleware pour vérifier les tokens JWT
const authMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  requestProperty: "user",
}).unless({ path: ["/api/auth/signup", "/api/auth/login"] });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Servir des fichiers statiques
app.use(express.static(path.join(__dirname, "Dashboard")));
app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

// Routes publiques
app.use("/api/auth", authRoutes);

// Routes protégées par JWT
app.use(authMiddleware);
app.use("/api/clients", clientRoute);
app.use("/api/projects", projectRoute);
app.use("/api/equipments", equipRoute);
app.use("/api/reservations", reservationRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/qr", qrRoute);
app.use("/api/employes", employeRoutes);
app.use("/api/salles", salleRoute);
app.use("/api/formations", formationRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/addClient", (req, res) => {
  res.sendFile(path.join(__dirname, "Dashboard", "html", "addClient.html"));
});

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Connection failed", error);
  });

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).send("Invalid token");
  }
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
