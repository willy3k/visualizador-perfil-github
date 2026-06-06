export const elements = {
  btnSearch: document.getElementById('btn-search'),
  inputSearch: document.getElementById('input-search'),
  profileResult: document.querySelector('.profile-results'),
};

export function showLoading(target) {
  target.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearResults(target) {
  target.innerHTML = '';
}

// Função para renderizar o perfil do usuário
export function renderProfile(userDate, target) {
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
  `;
}

export function showAlert(message) {
  alert(message);
}
