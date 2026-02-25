document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('ph-moon');
            themeIcon.classList.add('ph-sun');
        } else {
            themeIcon.classList.remove('ph-sun');
            themeIcon.classList.add('ph-moon');
        }
    }

    // Savings Calculator Logic
    const linesInput = document.getElementById('calc-lines');
    const dataInput = document.getElementById('calc-data');
    const linesValDisplay = document.getElementById('lines-val');
    const dataValDisplay = document.getElementById('data-val');
    const savingsAmountDisplay = document.getElementById('savings-amount');

    function calculateSavings() {
        const lines = parseInt(linesInput.value);
        const data = parseInt(dataInput.value);
        
        linesValDisplay.textContent = lines.toLocaleString();
        dataValDisplay.textContent = data + 'GB';
        
        // Mock formula: (lines * 12 months * base platform fee factor) + (data footprint optimization)
        // Simplified for visual impact:
        const baseSavingsPerLine = 45; // $45 saved per line per year
        const dataScaleFactor = data * 1.5; 
        
        const totalSavings = Math.floor(lines * (baseSavingsPerLine + dataScaleFactor));
        
        // Animate counter
        animateValue(savingsAmountDisplay, 
            parseInt(savingsAmountDisplay.textContent.replace(/,/g, '')), 
            totalSavings, 
            500);
    }

    linesInput.addEventListener('input', calculateSavings);
    dataInput.addEventListener('input', calculateSavings);

    // Number Animation Helper
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Intersection Observer for Metric Counters
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const metricsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    // Use a slightly different animation for decimals
                    if(target % 1 !== 0) {
                        animateDecimal(counter, 0, target, 2000);
                    } else {
                        animateValue(counter, 0, target, 2000);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const metricsContainer = document.getElementById('metrics-container');
    if (metricsContainer) {
        metricsObserver.observe(metricsContainer);
    }

    function animateDecimal(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = (progress * (end - start) + start).toFixed(1);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid var(--border-color)';
        }
    });

    // Initializations
    calculateSavings();
    renderGlobe();
});

// Globe Rendering with D3 (Simplified Placeholder for structural readiness)
function renderGlobe() {
    const container = document.getElementById('globe-container');
    if (!container || typeof d3 === 'undefined') return;

    // We will draw a simple SVG wireframe globe
    const width = 500;
    const height = 500;
    
    const svg = d3.select('#globe-container').append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `0 0 ${width} ${height}`);

    const projection = d3.geoOrthographic()
        .scale(220)
        .translate([width / 2, height / 2])
        .clipAngle(90);

    const path = d3.geoPath().projection(projection);

    const graticule = d3.geoGraticule();

    // Draw Graticule (Wireframe)
    svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", "var(--primary-light)")
        .style("stroke-width", "1px");

    // Add outline
    svg.append("path")
        .datum({type: "Sphere"})
        .attr("class", "sphere")
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", "var(--primary)")
        .style("stroke-width", "2px")
        .style("opacity", "0.5");

    // Simple Rotation Animation
    d3.timer(function(elapsed) {
        projection.rotate([elapsed * 0.05, -15]);
        svg.selectAll("path").attr("d", path);
    });
}
