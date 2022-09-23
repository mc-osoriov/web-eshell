import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Electraton" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About electraton" });
});

export default router;
