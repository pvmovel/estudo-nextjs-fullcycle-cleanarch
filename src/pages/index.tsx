import type { GetServerSideProps, NextPage } from 'next'
import { http } from '@utils/http';
import { Product } from '@utils/models';
import Link from 'next/link';


type HomeProps = {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div>
      <h1>Ecommerce Full Cycle</h1>
      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <label>Nome: </label> {product.name} 
            &nbsp;|&nbsp;
            <Link legacyBehavior href={`/products/${product.id}`} passHref>
              <a href="">Ver</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { data: products } = await http.get("products");

  return {
    props: {
      products,
    },
  };
};