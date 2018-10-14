const yargs = require('yargs')

const name = {
    required: true,
    description: 'The name of the todo task',
    alias: 'n'
}

const argv = yargs
    .command('create', 'Creates a new todo task', {
        name,
        text: {
            required: 'true',
            description: 'the description of the todo',
            alias: 't'
        }
    })
    .command('update', 'Set the status of the todo', {
        name,
        completed: {
            default: true,
            description: 'set the task either done or pending',
            alias: 'c'
        }
    })
    .command('remove', 'Removes one todo from the list.', {
        name
    })
    .command('list', 'prints all the todos', {
        hide: {
            alias: 'h',
            description: "doesn't shows the already completed tasks",
            default: false
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}