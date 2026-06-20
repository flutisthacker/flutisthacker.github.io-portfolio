function renderCV(data){
document.querySelector(".main-title").innerHTML=data.personal.title
const container =
document.getElementById('cvContainer');

container.innerHTML = `

<header class="cv-header">

    <h1>${data.personal.title}</h1>

    <div class="position">
        ${data.personal.position}
    </div>

    <div class="contact">

        ${data.personal.contact}
        •

        ${data.personal.email}
        •

        ${data.personal.location}

    </div>

</header>

<section>

<h2>Summary</h2>

<p>${data.summary}</p>

</section>

<section>

<h2>Skills</h2>

<div class="skills">

${data.skills.map(skill =>
`<span class="skill">${skill}</span>`
).join('')}

</div>

</section>

<section>

<h2>Experience</h2>

${renderExperience(data.experience)}

</section>

<section>

<h2>Projects</h2>

${renderProjects(data["projects involved"])}

</section>

<section>

<h2>Education</h2>

${renderEducation(data.education)}

</section>

<section>

<h2>Training</h2>

${renderTraining(data.training)}

</section>

<section>

<h2>References</h2>

${renderReferences(data.references)}

</section>

`;

}




function renderExperience(experience){

return experience.map(item => {

const points =
(item.points || '')
.split('||')
.filter(Boolean)
.map(p => `<li>${p}</li>`)
.join('');

return `

<div class="experience-item">

    <div class="d-flex gap-3">

        ${item.logo
        ? `<img src="../${item.logo}" class="logo">`
        : ''}

        <div>

            <h4>${item.title}</h4>
            
            <div class="meta">

                ${item.date}
                •
                ${item.location}

            </div>

            <p>${item.description}</p>

            <ul>${points}</ul>

        </div>

    </div>

</div>

`;

}).join('');

}

function renderProjects(projects = []) {

    if (!projects.length) return '';

    return projects.map(project => `
        <div class="project-item">

            <h4>${project.title}</h4>

            <div class="meta">
                ${project.date}
            </div>

            ${
                project.location
                ? `
                <a href="${project.location}"
                   target="_blank">
                    ${project.location}
                </a>
                `
                : ''
            }

            <p>${project.description || ''}</p>

        </div>
    `).join('');
}

function renderTraining(training = []) {

    if (!training.length) return '';

    return training.map(item => `
        <div class="training-item">

            <h4>${item.title}</h4>

            <div class="meta">
                ${item.date}
                ${item.location ? ` • ${item.location}` : ''}
            </div>

            <p>${item.description || ''}</p>

        </div>
    `).join('');
}

function renderEducation(education = []) {

    if (!education.length) return '';

    return education.map(item => `
        <div class="education-item">

            <div class="d-flex gap-3">

                ${
                    item.logo
                    ? `
                    <img
                        src="${item.logo}"
                        class="logo"
                        alt="${item.name}"
                    >
                    `
                    : ''
                }

                <div>

                    <h4>${item.title}</h4>

                    <div class="fw-bold">
                        ${item.name || ''}
                    </div>

                    <div class="meta">
                        ${item.date || ''}
                        ${item.location ? ` • ${item.location}` : ''}
                    </div>

                    ${
                        item.marks
                        ? `
                        <div class="marks">
                            Marks: ${item.marks}
                        </div>
                        `
                        : ''
                    }

                    <p>${item.description || ''}</p>

                </div>

            </div>

        </div>
    `).join('');
}

function renderAwards(awards = []) {

    if (!awards.length) return '';

    return awards.map(item => `
        <div class="award-item">

            <h5>${item.title}</h5>

            <div class="meta">
                ${item.location}
            </div>

            <div>
                ${item.date}
            </div>

        </div>
    `).join('');
}

function renderLanguages(languages = []) {

    if (!languages.length) return '';

    return `
        <ul class="language-list">

            ${languages.map(lang => `
                <li>${lang}</li>
            `).join('')}

        </ul>
    `;
}

function renderSkills(skills = []) {

    if (!skills.length) return '';

    return `
        <div class="skills-wrapper">

            ${skills.map(skill => `
                <span class="skill">
                    ${skill}
                </span>
            `).join('')}

        </div>
    `;
}

function renderReferences(references = []) {

    if (!references.length) return '';

    return references.map(ref => `
        <div class="reference-item">

            <h5>${ref.name}</h5>

            <div>
                ${ref.title || ''}
            </div>

            <div>
                ${ref.company || ''}
            </div>

            <div>
                ${ref.email || ''}
            </div>

            <div>
                ${ref.phone || ''}
            </div>

        </div>
    `).join('');
}

function renderSocialLinks(links = {}) {

    const icons = {
        facebook: 'fab fa-facebook',
        x: 'fab fa-x-twitter',
        instagram: 'fab fa-instagram',
        linkedin: 'fab fa-linkedin',
        youtube: 'fab fa-youtube'
    };

    return Object.entries(links)
        .filter(([key, value]) =>
            !Array.isArray(value) &&
            value
        )
        .map(([key, value]) => `
            <a
                href="${value}"
                target="_blank"
                class="social-link"
            >
                <i class="${icons[key] || ''}"></i>
            </a>
        `)
        .join('');
}

function renderYouTubeVideos(videos = []) {

    if (!videos.length) return '';

    return videos.map(video => `
        <a
            href="${video}"
            target="_blank"
            class="youtube-link"
        >
            ${video}
        </a>
    `).join('');
}



// fetch('data/cv.json')
// .then(res => res.json())
// .then(data => {

// window.cvData = data;

// renderCV(data);

// });
renderCV(cvData);

function exportPDF() {

    const element = document.getElementById("cvContainer");

    const opt = {
        margin: 0.3,
        filename: "cv.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
}