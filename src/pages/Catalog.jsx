import React from 'react';
import Container from 'react-bootstrap/Container';
import CategoryCard from '../components/CategoryCard';

const Catalog = () => {
  return (
    <main className='inner'>
      <section className='sec-3 mb-3 mb-lg-5'>
        <Container>
          <h1 className='h2'>Каталог товаров</h1>
          <ul className='list-unstyled justify-content-center row row-cols-2 row-cols-md-3 row-cols-xl-4 gx-3 gx-sm-4 gy-4 gy-sm-5'>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
          </ul>
        </Container>
      </section>
    </main>
  );
};

export default Catalog;