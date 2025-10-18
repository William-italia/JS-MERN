const fs = require('fs').promises;

module.exports = async function read(filePath) {
    return await fs.readFile(filePath, 'utf-8');
}

