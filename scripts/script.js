document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement("button");
    toggle.textContent = "Change Theme";
    toggle.style.position = "fixed";
    toggle.style.top = "10px";
    toggle.style.right = "10px";
    toggle.style.padding = "10px";
    toggle.style.background = "#002945"; // BUTTON COLOR
    toggle.style.color = "#ffffff"; 
    toggle.style.border = "none";
    toggle.style.borderRadius = "5px";
    toggle.style.cursor = "pointer";
    toggle.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(toggle);
    toggle.style.fontFamily = "'Courier New', Courier, monospace";
    toggle.style.fontSize = "12px";
    document.body.appendChild(toggle);

    // Define the available theme files
    const themes = ["styles/style1.css"];

    // Retrieve current theme index from localStorage (if set) or default to 0.
    let currentThemeIndex = localStorage.getItem("themeIndex") ? parseInt(localStorage.getItem("themeIndex"), 10) : 0;
    
    // Set the theme on page load.
    document.getElementById("theme-style").setAttribute("href", themes[currentThemeIndex]);

    toggle.addEventListener("click", () => {
        // Increment the theme index and cycle back to 0 if necessary.
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        document.getElementById("theme-style").setAttribute("href", themes[currentThemeIndex]);
        localStorage.setItem("themeIndex", currentThemeIndex);
    });
});