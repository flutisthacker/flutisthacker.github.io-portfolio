function enableDragDrop() {

    const sections = document.querySelectorAll(".cv-section");

    let dragged = null;

    sections.forEach(sec => {

        sec.addEventListener("dragstart", () => {
            dragged = sec;
            sec.classList.add("dragging");
        });

        sec.addEventListener("dragend", () => {
            dragged = null;
            sec.classList.remove("dragging");
        });

        sec.addEventListener("dragover", (e) => {
            e.preventDefault();

            const container = sec.parentNode;

            if (dragged && dragged !== sec) {
                container.insertBefore(dragged, sec);
            }
        });
    });
}

function saveProfile() {

    const profile = {
        cvData,
        sectionOrder,
        theme: currentTheme
    };

    localStorage.setItem(
        "cv_profile",
        JSON.stringify(profile)
    );

    alert("Profile saved!");
}
function loadProfile() {

    const saved = localStorage.getItem("cv_profile");

    if (!saved) {
        alert("No saved profile found");
        return;
    }

    const profile = JSON.parse(saved);

    cvData = profile.cvData;
    sectionOrder = profile.sectionOrder;
    currentTheme = profile.theme;

    document.getElementById("themeSelector").value = currentTheme;

    renderCV(cvData, currentTheme);
}

