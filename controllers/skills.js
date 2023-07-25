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

function edit (request, response) {
    const skill = Skill.getOne(request.params.id);
    response.render('skills/edit', {
        title: 'Skill to Edit',
        skill
    });
}

function newSkill (request, response) {
    response.render('skills/new', { title: 'New Skill'});
};

function deleteSkill (request, response) {
    Skill.deleteOne(request.params.id);
    response.redirect('/skills');
};

function update (request, response) {
    request.body.done = !!request.body.done;
    Skill.update(request.params.id, request.body);
    response.redirect(`/skills/${request.params.id}`);
}

function create (request, response) {
    console.log(request.body);
    Skill.create(request.body);
    response.redirect('/skills');
};

module.exports = {
    index,
    show,
    edit,
    new: newSkill,
    delete: deleteSkill,
    update,
    create
};