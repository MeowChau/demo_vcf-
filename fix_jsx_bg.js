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
    // skip header components
    if (file.includes(path.join('src', 'components', 'header'))) return;
    if (file.includes('layout.js')) return; // layout.js might have nothing but good to be safe

    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    newContent = newContent.replace(/backgroundColor:\s*['"]#fff['"]/gi, "backgroundColor: '#fff2df'");
    newContent = newContent.replace(/backgroundColor:\s*['"]#ffffff['"]/gi, "backgroundColor: '#fff2df'");
    newContent = newContent.replace(/backgroundColor:\s*['"]white['"]/gi, "backgroundColor: '#fff2df'");
    
    newContent = newContent.replace(/background:\s*['"]#fff['"]/gi, "background: '#fff2df'");
    newContent = newContent.replace(/background:\s*['"]#ffffff['"]/gi, "background: '#fff2df'");
    newContent = newContent.replace(/background:\s*['"]white['"]/gi, "background: '#fff2df'");

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        count++;
    }
});
console.log(`Fixed ${count} files.`);
