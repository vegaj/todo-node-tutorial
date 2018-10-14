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
        let res = todos.list()
        res.forEach(elem => todos.display(elem))
        break;
    case 'update':
        todos.update(argv.name, argv.completed)
            .then(() => { console.log('updated succesfully') })
            .catch(r => { console.log(r.message) });
        break;
    default:
        console.log('Command unrecognized');
        break;
}