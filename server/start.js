const PORT = process.env.PORT || 3000;
// const PRERENDER_TOKEN = 'ILXgFE5wZVN3SYXqXT72';

const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, '..', 'client')
});

// server.use(require('prerender-node').set('prerenderToken', PRERENDER_TOKEN));
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
