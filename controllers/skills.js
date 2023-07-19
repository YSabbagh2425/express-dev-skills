const Skill = require('../models/skill');

function show (request, response) {
    response.render('skills/show', {
        skill: Skill.getOne(request.params.id)
    });
};

function index(request, response) {
    response.render('skills/index', {
        skills: Skill.getAll()
    });
};

module.exports = {
    index,
    show
};