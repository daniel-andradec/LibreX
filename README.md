# LibreX: Trabalho Prático - Engenharia de Software 2024/1

### Objetivo: 
Desenvolver uma plataforma online voltada para a comunidade universitária, facilitando a troca de livros acadêmicos entre os estudantes. O objetivo é promover o acesso a uma ampla gama de materiais de estudo, reduzir custos com livros e estimular a interação entre alunos de diversos cursos.

### Principais Features:
#### Cadastro e Perfis de Usuários: 
- Os estudantes podem criar perfis, adicionando informações acadêmicas como curso, semestre e universidade.

#### Listagem de Livros Acadêmicos: 
- Funcionalidade para os usuários cadastrarem livros, incluindo detalhes como título, autor, edição, condição e disciplinas relacionadas.

#### Filtragem por Curso e Disciplina: 
- Sistema de busca que permite aos usuários filtrar livros por curso, disciplina, autor ou título, facilitando encontrar os materiais relevantes.


## Membros:
- Carolina Brandão Farinha Baeta (2021031556) - Front End
- Daniel Andrade Carmo (2021031491) - Back End
- Iago Gabino Gonçalves (2021067526) - Full Stack
- Victor de Almeida Nunes Murta (2021031467) - Back End

## Tecnologias Utilizadas
- Node JS com JavaScript (Back-end)
    - Express (Framework)

- Vue JS com Javascript (Front-end)
- SQLite (Database)
    - Sequelize

---
## Backlog do Produto
1. **Cadastro de Usuário**:
   - Como estudante, quero criar um perfil na plataforma para poder comprar e vender livros acadêmicos.

2. **Autenticação de Usuário**:
   - Como estudante, quero fazer login e logout da plataforma para acessar e gerenciar minhas informações e anúncios.

3. **Publicação de Anúncios de Livros**:
   - Como estudante, quero publicar anúncios dos livros que desejo vender para que outros estudantes possam visualizá-los e adquirir.

4. **Listagem de Livros**:
   - Como estudante, quero ver uma lista de todos os livros disponíveis para poder escolher quais me interessam.

5. **Filtragem de Livros**:
   - Como estudante, quero filtrar a lista de anúncios por curso, disciplina, autor ou título para encontrar os livros que preciso.

6. **Visualização de Detalhes do Livro**:
   - Como estudante, quero clicar em um anúncio para ver detalhes do livro e informações de contato do outro estudante.

7. **Remoção de Anúncios**:
   - Como estudante, quero remover meus anúncios de livros que já foram vendidos ou que decidi não vender mais.

8. **Compra de Livros**:
   - Como estudante, quero realizar a compra de um livro diretamente pela plataforma para simplificar o processo de aquisição.

9. **Avaliação do Livro e do Estudante**:
   - Como estudante, após realizar uma compra ou venda, quero avaliar o outro estudante e a condição do livro para ajudar a comunidade a fazer escolhas.

10. **Histórico de Transações**:
    - Como estudante, quero visualizar meu histórico de compras e vendas para acompanhar todas as transações que realizei através da plataforma.

11. **Visualização de Reputação e Histórico de Vendas no Perfil**:
    - Como estudante, quero visualizar no perfil de outros estudantes o número total de vendas realizadas e a nota média recebida em avaliações para determinar a confiabilidade e a qualidade dos vendedores na plataforma.
   
## Backlog do Sprint
1. **Cadastro de Usuário**:
   - Tarefas e Responsáveis:
     - Implementar lógica de cadastro no servidor. [Daniel]
     - Configurar validação dos dados de cadastro no backend. [Daniel]
     - Desenvolver a página de cadastro no frontend. [Carolina]
     - Implementar validação de formulário no lado do cliente. [Carolina]

2. **Autenticação de Usuário**:
   - Tarefas e Responsáveis:
     - Configurar o sistema de autenticação e sessão no backend. [Victor]
     - Implementar funcionalidades de login e logout no servidor. [Victor]
     - Integrar autenticação backend com a interface de usuário. [Iago]
     - Criar componentes de frontend para login e logout. [Iago]

3. **Publicação de Anúncios de Livros**:
   - Tarefas e Responsáveis:
     - Desenvolver a funcionalidade de adicionar novos anúncios no backend. [Victor]
     - Implementar validação de dados do anúncio no servidor. [Victor]
     - Criar a interface de usuário para adicionar novos anúncios. [Iago]
     - Integrar a interface de publicação de anúncios com o backend. [Iago]

4. **Listagem de Livros**:
   - Tarefas e Responsáveis:
     - Implementar a recuperação de anúncios de livros do banco de dados. [Daniel]
     - Desenvolver endpoints de API para listagem de livros. [Daniel]
     - Criar a visualização de listagem de livros no frontend. [Carolina]
     - Integrar a listagem de livros com os dados fornecidos pelo backend. [Carolina]

5. **Visualização de Detalhes do Livro**:
   - Tarefas e Responsáveis:
     - Desenvolver a página de detalhes do livro, incluindo layout e elementos de interface. [Carolina]
     - Implementar a lógica no backend para fornecer os detalhes específicos de um livro. [Victor]
     - Integrar a interface de detalhes do livro com informações provenientes do backend. [Iago]

## Versão Revisada do Backlog da Sprint
1. **Cadastro de Usuário**:
   - Tarefas e Responsáveis:
     - Implementar lógica de cadastro no servidor. [Victor]
     - Configurar validação dos dados de cadastro no backend. [Victor]
     - Desenvolver a página de cadastro no frontend. [Iago]
     - Implementar validação de formulário no lado do cliente. [Iago]

2. **Autenticação de Usuário**:
   - Tarefas e Responsáveis:
     - Configurar o sistema de autenticação e sessão no backend. [Daniel]
     - Implementar funcionalidades de login e logout no servidor. [Daniel]
     - Integrar autenticação backend com a interface de usuário. [Iago]
     - Criar componentes de frontend para login e logout. [Iago]

3. **Publicação de Anúncios de Livros**:
   - Tarefas e Responsáveis:
     - Desenvolver a funcionalidade de adicionar novos anúncios no backend. [Victor]
     - Implementar validação de dados do anúncio no servidor. [Victor]
     - Criar a interface de usuário para adicionar novos anúncios. [Iago]
     - Integrar a interface de publicação de anúncios com o backend. [Carolina]

4. **Listagem de Livros**:
   - Tarefas e Responsáveis:
     - Implementar a recuperação de anúncios de livros do banco de dados. [Daniel]
     - Desenvolver endpoints de API para listagem de livros. [Victor]
     - Criar a visualização de listagem de livros no frontend. [Carolina]
     - Integrar a listagem de livros com os dados fornecidos pelo backend. [Carolina]

5. **Visualização de Detalhes do Livro**:
   - Tarefas e Responsáveis:
     - Desenvolver a página de detalhes do livro, incluindo layout e elementos de interface. [Carolina]
     - Implementar a lógica no backend para fornecer os detalhes específicos de um livro. [Daniel]
     - Integrar a interface de detalhes do livro com informações provenientes do backend. [Iago]
    
6. **Execução de Venda**:
   - Tarefas e Responsáveis:
     - Implementar a lógica no backend para execução de uma venda. [Victor]
     - Desenvolver endpoint de API para retornar vendas e compras de um usuário. [Daniel]
     - Criar seção de histórico de compras e vendas do usuário na página de perfil. [Iago]
     - Integrar a interface de histórico de compras e vendas do usuário com o backend. [Carolina]

## Diagramas UML
 - [Diagrama de Classes](diagrams/classDiagram.png)

 - Diagrama de Atividades: [Cadastro de livros](diagrams/activityDiagram.png)