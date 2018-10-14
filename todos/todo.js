const fs = require('fs')

let todos = []

const db = './db/data.json'
const colors = require('colors')

let create = (name, text) => {

    if (todos.length === 0) {
        todos = fetch()
    }

    let t = {
        name,
        text,
        completed: false
    }

    const index = todos.findIndex(elem => name === elem.name)
    if (index < 0) {
        todos.push(t)
        return t
    } else {
        return false
    }

}


let list = (hide) => {

    if (todos.length == 0) {
        todos = fetch()
    }

    let list;
    if (hide) {
        list = todos.filter(t => !t.completed)
    } else {
        list = todos
    }
    return list
}

let remove = (name) => {

    if (todos.length == 0) {
        todos = fetch()
    }

    let updatedList = todos.filter(t => t.name !== name)
    if (updatedList.length === todos.length) {
        return false
    } else {
        todos = updatedList
        save()
        return true
    }
}

let update = (name, completed) => {

    if (todos.length == 0)
        todos = fetch()

    let i = todos.findIndex(t => t.name === name)
    if (i < 0)
        return false

    todos[i].completed = completed
    save()
    return true

}


let save = () => {
    const data = JSON.stringify(todos)
    fs.writeFile(db, data, err => err && console.log(`Unable to save the data: ${err}`))
}

let fetch = () => {
    try {
        return require('../db/data.json')
    } catch (e) {
        return []
    }
}

let display = (todo) => {
    console.log("_______________")
    console.log(colors.yellow(todo.name))
    console.log(todo.text)
    console.log("Done: " + (todo.completed ? "[x]".green : "[ ]".gray))
}

module.exports = {
    create,
    list,
    update,
    remove,
    display,
}