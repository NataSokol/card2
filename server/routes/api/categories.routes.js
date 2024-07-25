const router = require('express').Router();
const {Category} = require(../../db/models)
//подтягиваем темы квизо с базы данных 

router.route('/')
    .get(async(req, res) => {
        try {
           const allCategories = await Category.findAll();
           res.status(200).json(allCategories)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    })

router.route('/:id')
    .get(async (req, res) => {
        try {
            const {id} = req.params
            const chosenCategory = await Category.findOne({where: {id}});
            res.status(200).json(chosenCategory)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    })

    module.exports = router;  