import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
const routes={'/':['index.html','text/html'],'/app.js':['app.js','text/javascript'],'/style.css':['style.css','text/css'],'/logo.svg':['logo.svg','image/svg+xml'],'/modules.json':['modules.json','application/json']};
export function createServer(){return http.createServer(async(req,res)=>{const route=routes[new URL(req.url,'http://localhost').pathname];res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Cache-Control','no-store');if(req.method!=='GET'||!route){res.writeHead(404);return res.end('Not found');}try{const data=await readFile(new URL('./public/'+route[0],import.meta.url));res.writeHead(200,{'Content-Type':route[1]+'; charset=utf-8'});res.end(data);}catch{res.writeHead(500);res.end('Unavailable');}});}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href)createServer().listen(8788,'127.0.0.1',()=>console.log('NexusOffice: http://127.0.0.1:8788'));
