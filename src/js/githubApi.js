const BASE_URL = 'https://api.github.com';

export async function getGithubUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);
  const data = await response.json();

  // Retorna um objeto com as informações de sucesso, status e dados
  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}
