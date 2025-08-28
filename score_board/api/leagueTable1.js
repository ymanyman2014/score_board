let leagueTable1 = [
  {
    team: "Philippines",
    played: 2,
    won: 9,
    lost: 1,
    gd: 22,
    points: 9,
    flag: "ph",
  },
  {
    team: "Malaysia",
    played: 2,
    won: 6,
    lost: 4,
    gd: 14,
    points: 6,
    flag: "my",
  },
  {
    team: "Hong Kong",
    played: 2,
    won: 4,
    lost: 6,
    gd: 3,
    points: 4,
    flag: "hk",
  },
  {
    team: "Pakistan",
    played: 2,
    won: 1,
    lost: 9,
    gd: -11,
    points: 1,
    flag: "pk",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(leagueTable1);
  } else if (req.method === "PUT") {
    leagueTable1 = req.body;
    res.status(200).json({ message: "League Table 1 updated" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
