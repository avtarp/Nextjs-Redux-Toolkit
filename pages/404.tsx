import Link from 'next/link';
import React from 'react';

// pages/404.js
const Custom404 = () => {
	return (
		<h1>
			404 - Page Not Found <Link href="/">Back To Home</Link>
		</h1>
	);
};

export default Custom404;
