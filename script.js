const toggleBtn = document.getElementById("toggleMode");
    const body = document.body;
    const rolesBtn = document.getElementById("toggleRolesBtn");
    const rolesSection = document.getElementById("previousRoles");
    const arrow = rolesBtn.querySelector(".arrow");

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    rolesBtn.addEventListener("click", () => {
      rolesSection.classList.toggle("active");
      arrow.classList.toggle("open");
    });