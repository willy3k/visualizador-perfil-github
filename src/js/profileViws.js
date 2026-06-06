// Função para renderizar o perfil do usuário
export function renderProfile(userDate, userRepos, target) {

  const repositoriesHTML = userRepos &&userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank">
      <div class="repository-card">
          <h3>${repo.name}</h3>
          <div class="repository-stats">
              <span> ⭐ Stars: ${repo.stargazers_count} </span>
              <span> 🍴 Forks: ${repo.forks_count} </span>
              <span> 👀 Watchers: ${repo.watchers_count} </span>
              <span> 💻 Linguagem: ${repo.language || 'Não informada'} </span>
          </div>
      </div>
    </a>
    `).join('') : `<p> Nenhum repositorio encontrado 😔 </p>`;

  target.innerHTML = `
    <div class="profile-card">
      <img src="${userDate.avatar_url}" alt="Foto de perfil de ${userDate.name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userDate.name}</h2>
        <p>${userDate.bio || 'Não possui bio cadastrada 😔'}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${userDate.followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${userDate.following}</span>
      </div>
    </div>

    <div class="profile-repositorie">
       <h2> Repositórios</h2>
       <div class="repositories">
            ${repositoriesHTML}
        </div>
     </div>
  `;
}
