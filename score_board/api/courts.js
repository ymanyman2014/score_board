let courts = [
  {
    id: 1,
    name: "Court 1",
    teams: [
      { name: "Team A", scores: [0, 0, 0], flag: "ph" },
      { name: "Team B", scores: [0, 0, 0], flag: "my" },
    ],
  },
  // ...other courts
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(courts);
  } else if (req.method === "PUT") {
    courts = req.body;
    res.status(200).json({ message: "Courts updated" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}