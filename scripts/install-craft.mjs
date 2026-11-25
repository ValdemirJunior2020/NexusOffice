import {readFile,mkdir,mkdtemp,rm,writeFile,rename,readdir,stat,cp} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {tmpdir} from 'node:os';
import {join,resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const engines=JSON.parse(await readFile(join(root,'craft-engines.json'),'utf8'));
const dest=join(root,'public','craft');await mkdir(dest,{recursive:true});
async function locate(dir,depth=0){if(depth>4)throw Error('Missing web index');const entries=await readdir(dir,{withFileTypes:true});if(entries.some(x=>x.isFile()&&x.name==='index.html'))return dir;for(const x of entries.filter(x=>x.isDirectory())){try{return await locate(join(dir,x.name),depth+1)}catch{}}throw Error('Missing web index')}
for(const e of engines){const target=join(dest,e.id);try{const marker=JSON.parse(await readFile(join(target,'.installed.json'),'utf8'));if(marker.sha256===e.sha256&&(await stat(join(target,'index.html'))).isFile()){console.log(e.name+' already installed');continue}}catch{}
const tmp=await mkdtemp(join(tmpdir(),'nexus-craft-'));try{console.log('Downloading '+e.name+' '+e.version);const response=await fetch(e.url,{signal:AbortSignal.timeout(240000)});if(!response.ok)throw Error('Download HTTP '+response.status);const bytes=Buffer.from(await response.arrayBuffer());if(createHash('sha256').update(bytes).digest('hex')!==e.sha256)throw Error('SHA256 mismatch');const zip=join(tmp,'release.zip'),out=join(tmp,'unpacked');await writeFile(zip,bytes);await mkdir(out);
if(process.platform==='win32')execFileSync('powershell.exe',['-NoProfile','-NonInteractive','-Command','Expand-Archive -LiteralPath $env:NEXUS_ZIP -DestinationPath $env:NEXUS_OUT -Force'],{env:{...process.env,NEXUS_ZIP:zip,NEXUS_OUT:out},stdio:'inherit'});else execFileSync('unzip',['-q',zip,'-d',out],{stdio:'inherit'});
const site=await locate(out);const stage=join(dest,'.stage-'+e.id);await rm(stage,{recursive:true,force:true});await cp(site,stage,{recursive:true});await writeFile(join(stage,'.installed.json'),JSON.stringify(e));await rm(target,{recursive:true,force:true});await rename(stage,target);console.log('Installed '+e.name);
}finally{await rm(tmp,{recursive:true,force:true})}}
console.log('All four browser engines installed. No cloud deployment performed.');
