import { Router } from 'express'

const r = Router();

r.get("/hej", (req, res) => {
    res.send("ok");
});

export default r;