import './RelatedWords.css';

function RelatedWords({ heading, words, fetchData }) {
	return (
		<div className='RelatedWords'>
			<h3 className='RelatedWords__heading'>{heading}</h3>
			<div className='RelatedWords__words'>
				{words.map((word, index) => (
					<span
						onClick={() => {
							fetchData(word);
						}}
						className='RelatedWords__word'
						key={`${word}-${index}`}
					>
						{word}
					</span>
				))}
			</div>
		</div>
	);
}

export { RelatedWords };
