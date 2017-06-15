require('../support/BaseSpecHelper');
import createServer from '../../app/server';

let app = null;
beforeEach(() => {
    app = createServer();
});

afterEach(() => {
    app.server.close();
});
