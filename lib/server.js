import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}/`;  //ko nori vartotojas(nori userio)
    const parsedURL = new URL(req.url, baseURL);
    const URL = req.url;
    const httpMethod = req.method.toLowerCase();   //elgesio intensij(noriu sukurti useri, noriu paklausti, koks jo vardas etc)

    /*
    Uzklausu kategorijos:
     - ne failas (HTML)
     - binary failas
     - tekstinis failas
     - api (tai stringas ir JSON - tokio tipo failas)
    */

     let responseContent = '';

     const url = parsedURL.pathname;
     console.log(parsedURL.pathname);

     const binaryFileExtensions = ['ico', 'jpg', 'png'];
     const textFileExtentions = ['css', 'js', 'svg'];

     const urlExtension = url.split('.')[1];
     const isBinaryFile = binaryFileExtensions.includes(urlExtension);
     const isTextFile = textFileExtentions.includes(urlExtension);
     const isAPI = url.slice(0, 5) === '/api/';
     const isPage = !isBinaryFile && !isTextFile && !isAPI;

     if (isBinaryFile) {
         responseContent = 'BINARY FILE';
     }
    
      if (isTextFile) {
        responseContent = 'TEXT FILE';
    }
      if (isAPI) {
        responseContent = 'API RESPONSE';
    }
   
    if (isPage) {
    const routes = {
        '/': pageHome,
        '/services': pageServices,
        '/about': pageAbout,
        '/404': page404, 
    }

    responseContent = routes[req.url] ? routes[req.url]() : routes['/404']();
    }
    res.end(responseContent);
});

function pageHome() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        HOME PAGE CONTENT
    </body>
    </html>`;
}

function pageAbout() {
    return 'ABOUT PAGE';
}

function pageServices() {
    return 'SERVICES PAGE';
}

function page404() {
    return '404 PAGE';
}
function cssMain() {
    return 'body {background: pink;}';

}
function favicon() {
    return 'Favicon file';

}

server.init = () => {
    console.log('pasileidzia serveris...');
    server.httpServer.listen(65535)
}

export { server };
