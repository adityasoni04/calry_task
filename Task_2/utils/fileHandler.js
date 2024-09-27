const fs = require('fs');

const readRequests = (filePath) => {
    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data); 
        } catch (error) {
            console.error("Error reading or parsing the JSON file:", error);
            return []; 
        }
    }
    return []; 
};

const writeRequests = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readRequests, writeRequests };
