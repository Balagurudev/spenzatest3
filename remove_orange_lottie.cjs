const fs = require('fs');
const file = 'src/illustrations/bento_blocks_conversion_card.json';
const data = JSON.parse(fs.readFileSync(file));

let removedCount = 0;

function isOrangeOrRed(r, g, b) {
    // Check if color is distinctly warm (orange/red/yellow)
    // Spenza orange is approx 0.9, 0.3, 0.05
    return r > 0.6 && b < 0.5 && r > g * 0.9;
}

function checkAndHide(obj) {
    if (!obj) return;
    if (Array.isArray(obj)) {
        obj.forEach(checkAndHide);
    } else if (typeof obj === 'object') {
        // Solid fill
        if (obj.ty === 'fl' && obj.c && obj.c.k && Array.isArray(obj.c.k)) {
            const [r, g, b] = obj.c.k;
            if (isOrangeOrRed(r, g, b)) {
                if (obj.o) obj.o.k = 0; // set opacity to 0
                else obj.o = { a: 0, k: 0, ix: 5 };
                removedCount++;
            }
        }
        // Gradient fill
        else if (obj.ty === 'gf' && obj.g && obj.g.k && obj.g.k.k) {
            let colors = obj.g.k.k;
            // Gradient k array format: [offset, r, g, b, offset, r, g, b, ...]
            let hasOrange = false;
            for (let i = 0; i < colors.length; i += 4) {
                if (i + 3 < colors.length) {
                    if (isOrangeOrRed(colors[i + 1], colors[i + 2], colors[i + 3])) {
                        hasOrange = true;
                        break;
                    }
                }
            }
            if (hasOrange) {
                if (obj.o) obj.o.k = 0;
                else obj.o = { a: 0, k: 0, ix: 5 };
                removedCount++;
            }
        }

        // Recurse
        Object.values(obj).forEach(checkAndHide);
    }
}

checkAndHide(data);
console.log('Disabled opacity for', removedCount, 'orange/red/yellow fills/gradients.');

fs.writeFileSync(file, JSON.stringify(data));
