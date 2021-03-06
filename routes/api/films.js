const router = require("express").Router();

const { Film } = require("../../db");

router.get("/", async (req, res) => {
    //res.send("Entra correstamente. Funsiona!!")
    console.log(req.usuarioId);
    const films = await Film.findAll(); 
    res.json(films);
});

router.post("/", async (req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
});

router.put("/:filmId", async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId } // filter, if not it destroys all the database
    });
    res.json({ success: "Se ha modificado" })
});

router.delete("/:filmId", async (req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId }
    });
    res.json({ success: "Se ha borrado la película"})
});

module.exports = router;

