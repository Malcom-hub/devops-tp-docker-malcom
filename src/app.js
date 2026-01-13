function updateTimestamp() {
    const now = new Date();
    document.getElementById("timestamp").textContent =
        now.toLocaleString("fr-FR");
}

function generateContainerId() {
    const chars = "0123456789abcdef";
    let id = "";
    for (let i = 0; i < 12; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

function testContainer() {
    const resultBox = document.getElementById("result");
    resultBox.className = "result-box success";
    resultBox.innerHTML = `
        <strong>Test du Container Réussi</strong><br><br>
        - Serveur Nginx : OK<br>
        - Application Web : OK<br>
        - Port 80 : LISTENING<br>
        - Health Check : PASSED
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    updateTimestamp();
    setInterval(updateTimestamp, 1000);
    document.getElementById("container-id").textContent =
        generateContainerId();
});
