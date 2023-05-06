import { Router } from "express";

const route = Router();

//  Curd Operation

// !Create 
route.post("/", (req, res) => {
  res.send(501).json({ error: "Not Implemented" });
});

// !List 
route.get("/", (req, res) => {
  res.send(501).json({ error: "Not Implemented" });
});

// !get One 

route.get("//:id", (req, res) => {
  const { id } = req.params;
  res.send(501).json({ error: `Not Implemented ${id}` });
});

// !Update 

route.put("//:id", (req, res) => {
  const { id } = req.params;
  res.send(501).json({ error: `Not Implemented ${id}` });
});

// !Delete 

route.delete("//:id", (req, res) => {
  const { id } = req.params;
  res.send(501).json({ error: `Not Implemented ${id}` });
});

export default route;
