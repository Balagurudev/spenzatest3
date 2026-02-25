const fs = require('fs');
const file = 'src/illustrations/bento_blocks_conversion_card.json';
const data = JSON.parse(fs.readFileSync(file));

function getSvgBase64(pathData) {
    // Adding a white circle background to mimic the original Notion/Meta icons
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <g transform="translate(15, 15) scale(2.91)">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0084ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                ${pathData}
            </svg>
        </g>
    </svg>`;

    // The key missing piece was the data URL prefix
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

// Database, Activity, Users, BarChart
const icons = {
    w: getSvgBase64('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>'),
    y: getSvgBase64('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'),
    z: getSvgBase64('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    A: getSvgBase64('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>')
};

data.assets.forEach(a => {
    if (icons[a.id]) {
        a.p = icons[a.id];
        a.e = 1; // indicates embedded asset
        a.u = ""; // clear URL path
        console.log('Successfully replaced icon:', a.id);
    }
});

fs.writeFileSync(file, JSON.stringify(data));
console.log('Update complete for bento_blocks_conversion_card.json');
