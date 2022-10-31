import { CartContext } from '@context/cart.provider';
import { NextPage } from 'next';
import { FormEvent, useContext } from 'react';

type Props = {
  
};

export const CheckoutPage: NextPage = (props: Props) => {

  const cartContext = useContext(CartContext);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <h3>Meu Carrinho</h3>
      <ul>
        {cartContext.products.map((product) => (
          <li key={product.id}>
            Produto {product.name} - {product.price}
          </li>
        ))}
      </ul>

      
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Cartão de Crédito</label>
          <input type="text" name="credit_card_number" id="credit_cartd_number" />
        </div>
        <div>
          <button type="submit">Comprar</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;