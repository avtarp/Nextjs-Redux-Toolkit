import { useState } from 'react';
import ProductRating from './ProductRating';

const Product = () => {
	const [starCount, setStartCount] = useState(0);

	const handleAddStar = () => setStartCount(starCount + 1);

	return (
		<div>
			<h1>Products</h1>
			<p>We deliver awesome project</p>(
			<h1>
				Hurrey You Score <ProductRating starCount={starCount} />
			</h1>
			<button onClick={handleAddStar}>Add Star</button>
		</div>
	);
};

export default Product;
