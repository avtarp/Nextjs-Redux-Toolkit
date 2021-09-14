import GetTokenValue from '../hooks/getTokenValue';

const Dashboard = () => {
	const token = GetTokenValue();
	return (
		<>
			<h3>TOken: {token} </h3>
		</>
	);
};
export default Dashboard;

