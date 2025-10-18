const fs = require('fs').promises;

module.exports = async (caminho, dados) => {
    await fs.writeFile(caminho, dados, {flag: 'w'});
}

