import { getGithubUser, getGithubRepos } from './githubApi.js';
import { renderProfile } from './profileViws.js';


const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResult = document.querySelector('.profile-results');


async function getUserProfile() {
    const userName = inputSearch.value;

    if (!userName) {
      alert('Por favor, digite algo para pesquisar!');
      profileResult.innerHTML = '';
      return;
    }

    // Mostra a mensagem de carregamento
    profileResult.innerHTML = '<p class="loading">Carregando...</p>';

    // Tenta buscar as informações do usuário no GitHub e renderizar o perfil
    try {
      // Chama a função para obter os dados do usuário e aguarda a resposta
      const userData = await getGithubUser(userName);
      const userRepos = await getGithubRepos(userName);
      console.log(userRepos);
      
      // Renderiza o perfil do usuário usando os dados retornados
      renderProfile(userData, userRepos, profileResult);

    } catch (error) {

      console.error('Erro ao buscar o usuário:', error);
      alert('Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.');
      profileResult.innerHTML = '';
    }
  };

  btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    btnSearch.click();
  }
});

