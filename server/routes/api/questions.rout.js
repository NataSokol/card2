const router = require('express').Router();
const {Qestions} = require(../../db/models)
//подтягиваем вопросы с базы данных 

router.route('/:id')
    .get(async (req, res) => {
        try {
            const {id} = req.params
            const currQuestion = await Qestions.findOne({where: {id}});
            res.status(200).json(currQuestion)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    })

    module.exports = router;  


