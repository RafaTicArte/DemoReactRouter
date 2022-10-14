import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Blog() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <>
      <h2>Blog</h2>
      <p>
        Entrada:
        {params.id ? params.id : 'Vacío'}
      </p>
      <p>
        Nombre:
        {searchParams.get('nombre')}
      </p>
    </>
  );
}

export default Blog;
