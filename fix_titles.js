const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.js') || file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('src/app');
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    if (content.includes('Di?n dàn CEO Vi?t Nam')) {
        content = content.replace(/Di\?n dàn CEO Vi\?t Nam/g, 'Diễn đàn CEO Việt Nam');
        changed = true;
    }
    // Also catch any with dash
    if (content.includes('Di?n dàn CEO Vi?t Nam -')) {
        content = content.replace(/Di\?n dàn CEO Vi\?t Nam -/g, 'Diễn đàn CEO Việt Nam -');
        changed = true;
    }
    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
});
console.log(`Fixed ${count} files.`);
