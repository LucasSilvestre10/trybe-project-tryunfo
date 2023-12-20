## NOVO PROJETO TRYBE: Tryunfo - Baralho de Cartas

### 1. Formulário de Adição de Cartas
- Componente `Form` criado na pasta `src/components`.
- Renderização do componente `Form` dentro do componente principal `App`.

### 2. Props no Componente de Formulário
- O componente `Form` recebe as seguintes props:
  - `onInputChange`: Callback para lidar com eventos de onChange nos inputs.
  - Demais props necessárias para os inputs.

### 3. Componente Card com Props Necessárias
- Criado o componente `Card` na pasta `src/components`.
- Renderização do componente `Card` dentro do componente principal `App`.
- O componente `Card` recebe as seguintes props:
  - Propriedades necessárias para exibir informações da carta.

### 4. Preview da Carta em Tempo Real
- Estado compartilhado entre os componentes `Form` e `Card` para exibir informações em tempo real.
- Uso da prop `onInputChange` para lidar com eventos de onChange nos inputs do formulário.

### 5. Validação do Botão de Salvar
- Botão com `data-testid="save-button"` habilitado apenas se todas as informações do formulário estiverem preenchidas corretamente.

### 6. Função do Botão Salvar
- Adição de novas cartas ao baralho.
- Novo estado para armazenar a lista de cartas existentes no baralho.

### 7. Validação do Super Trunfo
- Restrição para permitir apenas 1 carta Super Trunfo no baralho.

### 8. Lista de Cartas Salvas
- Renderização de uma lista com todas as cartas no estado da aplicação.
- Atualização automática da lista ao adicionar novas cartas.

### 9. Botão para Remover Carta do Baralho
- Adição de um botão "Excluir" em cada carta do baralho, com `data-testid="delete-button"`.

### Habilidades Técnicas
- **Linguagens e Tecnologias:**
  - HTML, CSS, JavaScript
  - React.js
  - Testes unitários com Jest e React Testing Library
  - Componentização e reutilização de componentes
  - Boas práticas de validação de formulários e manipulação de listas.
