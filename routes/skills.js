var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

router.get('/', skillsController.index);

router.get('/:id', skillsController.show);

router.get('/new', skillsController.new);

router.get('/:id/edit', skillsController.edit);

router.post('/', skillsController.create);

router.delete('/:id', skillsController.delete);

router.put('/:id', skillsController.update);


module.exports = router;
