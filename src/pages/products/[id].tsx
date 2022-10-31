import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { http } from "@utils/http";
import { Product } from '@utils/models';
import { useContext } from 'react';
import { CartContext } from '@context/cart.provider';

type ProductDatailPageProps = {
  product: Product
};


export const ProductDetailPage: NextPage<ProductDatailPageProps> = ({
    product,
}) => {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>      
      <label>Preço</label> {product.price}<br />
      <button onClick={() => cartContext.addProduct(product)}>Adicionar no Carrinho</button>
    </div>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const { data: product } = await http.get(`/products/${id}`);
  return {
    props: {
      product,
    }
  }
}
