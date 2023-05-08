import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const route = Router();

//  ? CRUD Operation
// !Create
route.post("/", async (req, res) => {
  try {
    const { email, name, username } = req.body;
    console.log(email, name, username);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
      },
    });
    res.json(user);
  } catch (error) {
    console.error("error:", error);
    res.status(400).json({ error: "Username & email is must be unique" });
  }
});

// !List
route.get("/", async (req, res) => {
  const allUser = await prisma.user.findMany();
  res.json(allUser);
});

// !get One

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  res.json(user);
});

// !Update

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { bio, image, name } = req.body;

  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        bio,
        image,
        name,
      },
    });
    res.json(result);
  } catch (error) {}

  res.sendStatus(400).json({ error: `Failed to Update user` });
});



// !Delete

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    res.sendStatus(202).json({ message: "User Deleted" });

  } catch (error) {

    res.sendStatus(400).json({ error: `Failed to Delete user` });
  }
});

export default route;
