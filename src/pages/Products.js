import ShopContext from '../context/shopContext';
import React, { useContext, Fragment } from 'react';

const ProductsPage = () => {
  const context_p = useContext(ShopContext);

  return (
		<Fragment>
			<main className={`products ${context_p.tabName==='products' ? '' : 'disabled'}`}>
				<ul>
					{context_p.products.map(product => (
						<li key={product.id}>
							<div>
								<strong>{product.title}</strong> - ${product.price}
							</div>
							<div>
								<button
									onClick={context_p.addProductToCart.bind(this, product)}
								>
									Add to Cart
								</button>
							</div>
						</li>
					))}
				</ul>
			</main>
		</Fragment>
  );
};

export default ProductsPage;
