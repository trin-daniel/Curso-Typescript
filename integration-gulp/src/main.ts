import $ from 'jquery';
import Product from './model/Product';
const product = new Product('Cadeira Gamer', 106.56, 0.10);
const table = `
  <table border="1">
    <thead>
      <tr>
        <th>Nome do produto</th>
        <th>Preco</th>
        <th>Preco com desconto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.discountPrice()}</td>
      </tr>
    </tbody>
  </table>
`;
$('body').append(table)
