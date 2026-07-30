const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx') || file.endsWith('.js')) results.push(file);
        }
    });
    return results;
}

const files = [
    ...walk('d:\\duanma\\Consua v1.3\\source\\src\\components'),
    ...walk('d:\\duanma\\Consua v1.3\\source\\src\\app')
];

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Replace any fontFamily declaration in style objects
    newContent = newContent.replace(/fontFamily:\s*(['"`]).*?\1/g, "fontFamily: 'var(--font-montserrat)'");
    
    // Replace font-family in any other string/template spots if it matches
    newContent = newContent.replace(/font-family:\s*(['"`]).*?\1/g, "font-family: var(--font-montserrat)");

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        count++;
    }
});
console.log(`Replaced all fontFamilies in ${count} files.`);
