// Simple Express backend for scoreboard app
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
      { name: "Team A", scores: [0, 0, 0] },
      { name: "Team B", scores: [0, 0, 0] },
    ],
  },
  {
    id: 2,
    name: "Court 2",
    teams: [
      { name: "Team A", scores: [0, 0, 0] },
      { name: "Team B", scores: [0, 0, 0] },
    ],
  },
  {
    id: 3,
    name: "Court 3",
    teams: [
      { name: "Team A", scores: [0, 0, 0] },
      { name: "Team B", scores: [0, 0, 0] },
    ],
  },
  {
    id: 4,
    name: "Court 4",
    teams: [
      { name: "Team A", scores: [0, 0, 0] },
      { name: "Team B", scores: [0, 0, 0] },
    ],
  },
];

let leagueTable1 = [
  { team: "Philippines", played: 2, won: 9, lost: 1, gd: 22, points: 9 },
  { team: "Malaysia", played: 2, won: 6, lost: 4, gd: 14, points: 6 },
  { team: "Hong Kong", played: 2, won: 4, lost: 6, gd: 3, points: 4 },
  { team: "Pakistan", played: 2, won: 1, lost: 9, gd: -11, points: 1 },
];
let leagueTable2 = [
  { team: "Thailand", played: 2, won: 7, lost: 3, gd: 19, points: 7 },
  { team: "India", played: 2, won: 5, lost: 5, gd: 11, points: 5 },
  { team: "Singapore", played: 2, won: 5, lost: 5, gd: 8, points: 5 },
  { team: "South Korea", played: 2, won: 3, lost: 7, gd: -2, points: 3 },
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
