import React from 'react';

type ProductRatingProps = {
	starCount: number;
};

const ProductRating = ({ starCount }: ProductRatingProps) => {
	return (
		<div>
			<p>
				{Array(starCount)
					.fill('🌟')
					.map((star: string) => star)}
			</p>
		</div>
	);
};

export default ProductRating;
