let leagueTable2 = [
  {
    team: "Thailand",
    played: 2,
    won: 7,
    lost: 3,
    gd: 19,
    points: 7,
    flag: "th",
  },
  { team: "India", played: 2, won: 5, lost: 5, gd: 11, points: 5, flag: "in" },
  {
    team: "Singapore",
    played: 2,
    won: 5,
    lost: 5,
    gd: 8,
    points: 5,
    flag: "sg",
  },
  {
    team: "South Korea",
    played: 2,
    won: 3,
    lost: 7,
    gd: -2,
    points: 3,
    flag: "kr",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(leagueTable2);
  } else if (req.method === "PUT") {
    leagueTable2 = req.body;
    res.status(200).json({ message: "League Table 2 updated" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
