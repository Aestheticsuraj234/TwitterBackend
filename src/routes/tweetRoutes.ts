import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const route = Router();

//  Curd Operation

// !Create
route.post("/", async (req, res) => {
  const { content, image, userId } = req.body;
  try {
    const result = await prisma.tweet.create({
      data: {
        content,
        image,
        userId, //todo mange on the basis of user auth
      },
    });
    res.json(result);
  } catch (error) {
    console.error("error:", error);
    res.status(400).json({ error: "Username & email is must be unique" });
  }
});

// !List
route.get("/", async (req, res) => {
  try {
    const allTweet = await prisma.tweet.findMany();
    res.json(allTweet);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
});

// !get One

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    res.json(tweet);
  } catch (error) {
    res.status(400).json({ error: "Somthing went wrong" });
  }
});

// !Update

route.put("/:id", (req, res) => {

  const {id} = req.params;
  res.sendStatus(501).json({error:`Not Implemented: ${id}`})



});

// !Delete

route.delete("/:id", async(req, res) => {
  try {
    const { id } = req.params;
    await prisma.tweet.delete({ where: { id: Number(id) } });
    res.sendStatus(202).json({ message: "Tweet Deleted" });

  } catch (error) {

    res.sendStatus(400).json({ error: `Failed to Delete Tweet` });
  }
});

export default route;
