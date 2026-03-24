const fs = require('fs');
let html = fs.readFileSync('d:/Portfolio/index.html', 'utf8');

const edStart = html.indexOf('<!-- Education Section -->');
const skStart = html.indexOf('<!-- Skills Section -->');
const prStart = html.indexOf('<!-- Projects Section -->');

console.log('edStart:', edStart);
console.log('skStart:', skStart);
console.log('prStart:', prStart);

if (edStart > -1 && skStart > -1 && prStart > -1) {
    // We get the actual string by scanning backwards a bit to include spaces
    const edRealStart = html.lastIndexOf('\n', edStart) + 1;
    const skRealStart = html.lastIndexOf('\n', skStart) + 1;
    const prRealStart = html.lastIndexOf('\n', prStart) + 1;

    let edSec = html.substring(edRealStart, skRealStart);
    let skSec = html.substring(skRealStart, prRealStart);
    
    edSec = edSec.replace('education section alt-bg', 'education section');
    skSec = skSec.replace('skills section', 'skills section alt-bg');
    
    html = html.substring(0, edRealStart) + skSec + edSec + html.substring(prRealStart);
    fs.writeFileSync('d:/Portfolio/index.html', html);
    console.log('Swapped successfully!');
} else {
    console.log('Could not find all sections.');
}
