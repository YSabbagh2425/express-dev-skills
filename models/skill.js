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

module.exports = {
    getAll,
    getOne
};