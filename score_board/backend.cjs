// Simple Express backend for scoreboard app (CommonJS)
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// In-memory data (temporary database)
let courts = [
  {
    id: 1,
    name: "Court 1",
    teams: [
      { name: "Team A", scores: [0, 0, 0], flag: "ph" },
      { name: "Team B", scores: [0, 0, 0], flag: "my" },
    ],
  },
  {
    id: 2,
    name: "Court 2",
    teams: [
      { name: "Team A", scores: [0, 0, 0], flag: "hk" },
      { name: "Team B", scores: [0, 0, 0], flag: "pk" },
    ],
  },
  {
    id: 3,
    name: "Court 3",
    teams: [
      { name: "Team A", scores: [0, 0, 0], flag: "th" },
      { name: "Team B", scores: [0, 0, 0], flag: "in" },
    ],
  },
  {
    id: 4,
    name: "Court 4",
    teams: [
      { name: "Team A", scores: [0, 0, 0], flag: "sg" },
      { name: "Team B", scores: [0, 0, 0], flag: "kr" },
    ],
  },
];

let leagueTable1 = [
  { team: "Philippines", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
  { team: "Malaysia", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
  { team: "Hong Kong", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
  { team: "Pakistan", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
];
let leagueTable2 = [
  { team: "Thailand", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
  { team: "India", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
  { team: "Singapore", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
  { team: "South Korea", played: 0, won: 0, lost: 0, gd: 0, points: 0 },
];

// GET endpoints
app.get("/api/courts", (req, res) => res.json(courts));
app.get("/api/leagueTable1", (req, res) => res.json(leagueTable1));
app.get("/api/leagueTable2", (req, res) => res.json(leagueTable2));

// PUT endpoints for updating
app.put("/api/courts", (req, res) => {
  courts = req.body;
  res.json({ success: true });
});
app.put("/api/leagueTable1", (req, res) => {
  leagueTable1 = req.body;
  res.json({ success: true });
});
app.put("/api/leagueTable2", (req, res) => {
  leagueTable2 = req.body;
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

// SQL command to insert a team into the database
// INSERT INTO teams (court_id, name, flag) VALUES (1, 'Team A', 'ph');
