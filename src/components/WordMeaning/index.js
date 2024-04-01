import { RelatedWords } from '../';

import './WordMeaning.css';

function WordMeaning({ data }) {
	return (
		<div className='WordMeaning'>
			<h2 className='WordMeaning__part-of-speech'>{data.partOfSpeech}</h2>
			<h3 className='WordMeaning__heading'>Meaning</h3>
			<ul className='WordMeaning__definitions'>
				{data.definitions.map((definition, index) => (
					<li key={index} className='WordMeaning__definition'>
						{definition.definition}
					</li>
				))}
			</ul>
			{data.synonyms && data.synonyms.length > 0 && (
				<RelatedWords heading='Synonyms' words={data.synonyms} />
			)}
			{data.antonyms && data.antonyms.length > 0 && (
				<RelatedWords heading='Antonyms' words={data.antonyms} />
			)}
		</div>
	);
}

export { WordMeaning };
