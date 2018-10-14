const argv = require('./config/yargs').argv;
const command = argv._[0];

const todos = require('./todos/todo');


switch (command) {
    case 'create':
        let created = todos.create(argv.name, argv.text)
        if (created) {
            console.log(`Created ${created.name}`)
        } else {
            console.log(`${argv.name} already present.`)
        }
        break;
    case 'remove':
        let removed = todos.remove(argv.name);
        if (removed)
            console.log("removed");
        else
            console.log("element not found");
        break;
    case 'list':
        let res = todos.list(argv.hide)
        res.forEach(elem => todos.display(elem))
        break;
    case 'update':
        let updated = todos.update(argv.name, argv.completed)
        if (updated) {
            console.log('updated')
        } else {
            console.log(`${argv.name} not found`)
        }
        break;
    default:
        console.log('Command unrecognized');
        break;
}