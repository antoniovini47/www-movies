/* Comentário para o teste técnico: 
Aqui eu simplesmente quis demonstrar um tipo simples de um objeto que poderia ser utilizado
durante a aplicação, esse é para a comunicação entre os componentes de busca e as suas
requisições para a API.
*/

export type SearchParams = {
  text: string;
  page?: number;
};
