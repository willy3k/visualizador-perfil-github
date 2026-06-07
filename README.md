# 🔍 Visualizador de Perfil do GitHub

Este é um projeto simples e funcional que permite buscar informações de usuários do GitHub utilizando a API oficial da plataforma. Com ele, você pode visualizar dados de perfil, como foto, biografia, número de seguidores e os repositórios mais recentes.

## 🚀 Funcionalidades

- **Busca de Usuário:** Digite o nome de usuário do GitHub e obtenha as informações instantaneamente.
- **Informações de Perfil:** Exibe nome, foto (avatar), biografia e estatísticas de seguidores e seguindo.
- **Lista de Repositórios:** Mostra os 10 repositórios mais recentes do usuário, incluindo:
    - Nome do repositório.
    - Quantidade de estrelas (Stars).
    - Quantidade de forks.
    - Quantidade de observadores (Watchers).
    - Linguagem predominante.
- **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela (desktop e mobile).
- **Animações:** Feedback visual suave durante a interação.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação da página.
- **CSS3:** Estilização, animações e layout responsivo.
- **JavaScript (ES6+):** Lógica de busca, consumo de API e manipulação do DOM.
- **GitHub API:** Interface para obtenção dos dados reais dos usuários.
- **Devicon:** Ícones de tecnologia.

## 📁 Estrutura do Projeto

Para ajudar no entendimento, aqui está a organização dos arquivos:

- `index.html`: Arquivo principal que contém a estrutura da página.
- `src/css/`: Pasta com os estilos divididos por responsabilidade:
    - `reset.css`: Remove estilos padrão dos navegadores.
    - `styles.css`: Estilos principais do projeto.
    - `animations.css`: Efeitos visuais.
    - `responsive.css`: Ajustes para dispositivos móveis.
- `src/js/`: Pasta com a lógica do sistema:
    - `githubApi.js`: Funções que conversam com a API do GitHub.
    - `profileViws.js`: Responsável por criar o HTML que exibe o perfil (Visualização).
    - `index.js`: Arquivo principal que conecta os eventos do botão de busca com a API e a tela.

## 💻 Como Executar o Projeto

Como este projeto utiliza **Módulos do JavaScript** (`type="module"`), ele precisa ser executado através de um servidor local para funcionar corretamente devido às políticas de segurança dos navegadores (CORS).

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/visualizador-perfil-github.git
    ```
2.  **Abra com o VS Code.**
3.  **Instale a extensão "Live Server"** (se ainda não tiver).
4.  Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5.  Acesse `http://127.0.0.1:5500` no seu navegador.

---
Feito com ❤️ por [Seu Nome]
