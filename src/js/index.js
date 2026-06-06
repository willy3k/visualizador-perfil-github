// 1. Pegamos o elemento do botão pelo ID dele
const btnSearch = document.getElementById('btn-search');

// 2. Pegamos o elemento do input pelo ID dele
const inputSearch = document.getElementById('input-search');

const profileResult = document.querySelector('.profile-results');


const BASE_URL = 'https://api.github.com';

// 3. Adicionamos um "ouvinte de evento" (event listener) que vai disparar quando o botão for clicado
btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        // Mostra o carregamento antes de começar a busca
        profileResult.innerHTML = '<p class="loading">Carregando...</p>';

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);

            
            if (!response.ok) {
                alert('Usuário não encontrado. por favor, verifique o nome digitado e tente novamente.');
                profileResult.innerHTML = ''; // Limpa o resultado anterior
                return;
            }

            const userDate = await response.json();

            console.log(userDate);

            profileResult.innerHTML = `
            <div class="profile-card">
               <img src="${userDate.avatar_url}" alt="Foto de perfil de ${userDate.name}" class="profile-avatar">
               <div class="profile-info">
                  <h2>${userDate.name}</h2>
                  <p>${userDate.bio || 'Não possui bio cadastrada 😔'}</p>
            
                </div> 
            </div>`;

        } catch (error) {
            alert('Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.');
        }

    } else {
        alert('Por favor, digite algo para pesquisar!');
    }

});
