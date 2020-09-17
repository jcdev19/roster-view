const { builtinModules } = require("module")

const fs = require('fs')

const user = function getUser(name) {
    const data = JSON.parse(fs.readFileSync('./data/data.json'))
    console.log(data)
    console.log(name)
    const filtered = data.filter(function (entry) {
        return entry.FirstName === name;
    });
    console.log(filtered)
    return filtered
}

module.exports = user