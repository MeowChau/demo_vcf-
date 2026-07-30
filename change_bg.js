const fs = require('fs');

const files = [
    'public/assets/css/style.css',
    'public/assets/css/helper.css'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all variations of background white with #fff2df
    content = content.replace(/background-color\s*:\s*#ffffff/gi, 'background-color: #fff2df');
    content = content.replace(/background-color\s*:\s*#fff(?![\w\d])/gi, 'background-color: #fff2df');
    
    content = content.replace(/background\s*:\s*#ffffff/gi, 'background: #fff2df');
    content = content.replace(/background\s*:\s*#fff(?![\w\d])/gi, 'background: #fff2df');
    
    // If it's style.css, append a global body rule
    if (file.includes('style.css')) {
        content += '\nbody { background-color: #fff2df !important; }\n';
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
});
