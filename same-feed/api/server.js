const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Second Post", content: "Lorem ipsum dolor sit amet." },
  { id: 3, title: "Third Post", content: "Lorem ipsum dolor sit amet." },
];

let likes = [];

app.get("/api/posts", (req, res) => {
  res.send(posts);
});

app.post("/api/likes", (req, res) => {
  const postId = req.body.postId;
  const userId = 1; // get user ID from session or JWT token
  likes.push({ postId: postId, userId: userId });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
