const fs = require('fs');
let html = fs.readFileSync('d:/Portfolio/index.html', 'utf8');

const edStart = html.indexOf('    <!-- Education Section -->');
const skStart = html.indexOf('    <!-- Skills Section -->');
const prStart = html.indexOf('    <!-- Projects Section -->');

if (edStart > -1 && skStart > -1 && prStart > -1) {
    let edSec = html.substring(edStart, skStart);
    let skSec = html.substring(skStart, prStart);
    
    edSec = edSec.replace('class=\"education section alt-bg\"', 'class=\"education section\"');
    skSec = skSec.replace('class=\"skills section\"', 'class=\"skills section alt-bg\"');
    
    html = html.substring(0, edStart) + skSec + edSec + html.substring(prStart);
    fs.writeFileSync('d:/Portfolio/index.html', html);
    console.log('Swapped!');
} else {
    console.log('Not found');
}
