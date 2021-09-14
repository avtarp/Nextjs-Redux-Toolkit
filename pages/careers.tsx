import React from 'react';
import BookWithEaseSec from '../components/careers/BookWithEaseSec';
import CarrerRegsiterMadeSimpleSec from '../components/careers/CarrerRegsiterMadeSimpleSec';
import ConnectAtheletsSec from '../components/careers/ConnectAtheletsSec';
import ConnectWithFutureSec from '../components/careers/ConnectWithFutureSec';
import MakePaymentsOnlineSec from '../components/careers/MakePaymentsOnlineSec';
import StayUpToDateSec from '../components/careers/StayUpToDateSec';
import WeWillHelpSec from '../components/careers/WeWillHelpSec';

const Careers = () => {
	return (
		<>
			<ConnectAtheletsSec />
			<WeWillHelpSec />
			<CarrerRegsiterMadeSimpleSec />
			<ConnectWithFutureSec />
			<BookWithEaseSec />
			<StayUpToDateSec />
			<MakePaymentsOnlineSec />
		</>
	);
};
export default Careers;
