const http = require('http');

const html = `
    <!doctype>
    <html>
        <head>
            <meta charset = "utf-8">
            <title>Node.js</title>
            <link rel="stylesheet" href="app.css">
        </head>
        <body>
            <h1>Node.js server</h1>
            <button>Button</button>
            <script src="app.js"></script>
        </body>
    </html>
`;

const css = `
    body{
        margin:0;
        padding:0;
        text-align:center;
    }
    h1{
        color:lightgreen;
        font-family:Arial, sans-serif;
    }
    button{
        padding:7px;
        font-size:16px;
        font-family:Arial, sans-serif;
        text-transform:uppercase;
        background:#C4C4C4;
        border:none;
        outline:none;
        cursor:pointer;
    }
`;
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Hello from server'));
`;

http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.end(html);
        break;
        case '/app.css':
            res.writeHead(200, { 'content-Type': 'text/css' });
            res.end(css);
        break;
        case '/app.js':
            res.writeHead(200, { 'content-Type': 'text/javascript' });
            res.end(js);
        break;
        
        default:
            res.writeHead(404, { 'content-Type': 'text/plain' });
            res.end('404 page not found');
    }
}).listen(3000, () => console.log('It works!'));