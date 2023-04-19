const router = require('express').Router();

const todoModel = require('../model/TodoModel')

router.post('./api/item', async (req, resp) => {
    try {
        const newItem = new todoModel({
            item: req.body.item
        })

        // save the item in database
        const saveItem = await newItem.save()
        resp.status(200).json('item added succesfully')
    } catch (error) {
        resp.json(error)
    }
})

// export router 

module.export = router;