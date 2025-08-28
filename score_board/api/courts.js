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
