const BASE_URL = 'https://api.github.com';

export async function getGithubUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);

  if (!response.ok) {
    throw new Error(`Usuario não encontrado: ${response.status}`);
  }

  return await response.json();
}

export async function getGithubRepos(userName) {

  const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
  
  if (!response.ok) {
    throw new Error(`Erro ao obter repositórios: ${response.status}`);
  }

  return await response.json();
}
