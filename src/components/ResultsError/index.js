import './ResultsError.css';

function ResultsError({ data }) {
	return (
		<div className='ResultsError'>
			<div className='ResultsError__emoji'>😕</div>
			<h2 className='ResultsError__title'>{data.title}</h2>
			<p className='ResultsError__message'>{`${data.message} ${data.resolution}`}</p>
		</div>
	);
}

export { ResultsError };
