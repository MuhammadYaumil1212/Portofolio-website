const projects = [
  {
    title: "Movie Streaming App",
    image: "https://source.unsplash.com/600x400/?mobile,app",
    description: "Streaming movie app with Supabase authentication and Clean Architecture.",
    tech: ["Flutter", "Supabase", "REST API"],
    architecture: ["Clean Architecture", "MVVM"]
  },
  {
    title: "Sport Booking App",
    image: "https://source.unsplash.com/600x400/?sports,app",
    description: "Booking lapangan olahraga dengan payment gateway integration.",
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    architecture: ["Feature-based Architecture"]
  },
  {
    title: "AI Object Detection App",
    image: "https://source.unsplash.com/600x400/?ai,mobile",
    description: "Real-time object detection app using YOLO model integration.",
    tech: ["Flutter", "YOLOv8", "TensorFlow"],
    architecture: ["Modular Architecture"]
  }
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <strong>Tech Stack:</strong><br>
    ${project.tech.map(t => `<span class="badge">${t}</span>`).join("")}
    <br><br>
    <strong>Architecture:</strong><br>
    ${project.architecture.map(a => `<span class="badge">${a}</span>`).join("")}
  `;

  container.appendChild(card);
});

/* Scroll Animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project-card").forEach(card => {
  observer.observe(card);
});

/* Dark/Light Toggle */
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
