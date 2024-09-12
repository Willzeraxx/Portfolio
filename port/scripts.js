document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const portfolioGrid = document.getElementById('portfolio-grid');
            data.projects.forEach(project => {
                const portfolioItem = document.createElement('div');
                portfolioItem.classList.add('portfolio-item');

                const projectImage = document.createElement('img');
                projectImage.src = project.image;
                projectImage.alt = project.title;

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.title;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;

                portfolioItem.appendChild(projectImage);
                portfolioItem.appendChild(projectTitle);
                portfolioItem.appendChild(projectDescription);

                portfolioGrid.appendChild(portfolioItem);
            });
        })
        .catch(error => console.error('Erro ao carregar o portfólio:', error));
});
