import { getGithubUser } from './githubApi.js';
import { elements, showLoading, clearResults, renderProfile, showAlert } from './profileViws.js';

async function handleSearch() {
  // Obtém o nome de usuário digitado no campo de pesquisa
  const userName = elements.inputSearch.value.trim();

  // Valida se o campo de pesquisa está vazio
  if (!userName) {
    showAlert('Por favor, digite algo para pesquisar!');
    clearResults(elements.profileResult);
    return;
  }

  showLoading(elements.profileResult);

  // Tenta buscar as informações do usuário no GitHub e renderizar o perfil
  try {
    // Chama a função para obter os dados do usuário e aguarda a resposta
    const { ok, status, data } = await getGithubUser(userName);

    // Verifica se a resposta da API foi bem-sucedida (status 200-299)
    if (!ok) {
      clearResults(elements.profileResult);
      showAlert('Usuário não encontrado. por favor, verifique o nome digitado e tente novamente.');
      console.warn('GitHub API retornou status:', status);
      return;
    }

    // Renderiza o perfil do usuário usando os dados retornados
    renderProfile(data, elements.profileResult);
    
  } catch (error) {
    clearResults(elements.profileResult);
    console.error('Erro ao buscar o usuário:', error);
    showAlert('Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.');
  }
}
// Adiciona o evento de clique ao botão de pesquisa
elements.btnSearch.addEventListener('click', handleSearch);

