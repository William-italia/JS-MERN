const fs = require('fs').promises;
const { FILE } = require('dns');
const path = require('path');
const { start } = require('repl');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))


async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(path.resolve(rootDir));

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/g.test(fileFullPath)) continue;
        if(/\node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(!/\.css/g.test(fileFullPath)) continue;

        console.log(fileFullPath, stats.isDirectory());
    }
}

// console.log(__dirname);


readdir('c:\\Users\\willi\\Documents\\Jss\\');