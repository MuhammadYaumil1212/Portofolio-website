const projects = [
    {
        title: "Movie App",
        description: "Aplikasi streaming movie berbasis Flutter dengan autentikasi Supabase dan Clean Architecture.",
        techStack: ["Flutter", "Supabase", "REST API", "Firebase"],
        architecture: ["Clean Architecture", "MVVM"]
    },
    {
        title: "Sport Booking App",
        description: "Aplikasi booking lapangan olahraga dengan sistem pembayaran dan manajemen contest.",
        techStack: ["Flutter", "Firebase", "Cloud Firestore"],
        architecture: ["Feature-based Architecture"]
    },
    {
        title: "AI Object Detection App",
        description: "Aplikasi mobile dengan integrasi YOLO untuk real-time object detection.",
        techStack: ["Flutter", "YOLOv8", "Python", "TensorFlow"],
        architecture: ["Modular Architecture"]
    }
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <strong>Tech Stack:</strong>
        <div class="tech-stack">
            ${project.techStack.map(tech => `<span>${tech}</span>`).join("")}
        </div>

        <br>

        <strong>Architecture:</strong>
        <div class="architecture">
            ${project.architecture.map(arch => `<span>${arch}</span>`).join("")}
        </div>
    `;

    container.appendChild(card);
});
