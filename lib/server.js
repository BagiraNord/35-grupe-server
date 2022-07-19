import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    console.log('gavau uzklausa...');

    
    const routes = {
        '/': pageHome,
        '/services': pageServices,
        '/about': pageAbout,
        '/404': page404, 
        '/css/main.css': CSSMain,
        '/favicon,ico': favicon,
    }

    let responseContent = routes[req.url] ? routes[req.url]() : routes['/404']();

    res.end(responseContent);
});

function pageHome() {
    return 'HOME PAGE';
}

function pageServices() {
    return 'SERVICES PAGE';
}
function pageAbout() {
    return 'ABOUT PAGE';
}
function page404() {
    return '404 PAGE';
}
function cssMain() {
    return 'body {background: red:}';

}
function favicon() {
    return 'Favicon file';

}

server.init = () => {
    console.log('pasileidzia serveris...');
    server.httpServer.listen(65535)
}

export { server };
