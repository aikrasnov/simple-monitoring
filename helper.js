const fs = require('fs');

const getStatus = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/mock.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};

module.exports = {
    getStatus
};
