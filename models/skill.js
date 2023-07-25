const skills = [
    {id: 1, skill: 'HTML'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'JS'},
    {id: 4, skill: 'NodeJS'},
    {id: 5, skill: 'ExpressJS'}
];

function getOne (id) {
    id = parseInt(id);
    for (i = 0; i < id.length; i++);
    return skills.find(skill => skill.id === id);
}

function getAll () {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function update (id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};