import useSound from 'use-sound';
import { WordMeaning } from '../';
import { IconPlay } from '../../icons';

import './Results.css';

function Results({ data }) {
	const [play] = useSound(data.phonetics.find((phonetic) => phonetic.audio).audio || '');

	return (
		<section className='Results'>
			<div className='Results__header'>
				<div className='Results__word-info'>
					<h1 className='Results__word'>{data.word}</h1>
					<p className='Results__word-phonetic'>{data.phonetic}</p>
				</div>
				<div className='Results__audio' onClick={play}>
					<IconPlay />
				</div>
			</div>
			{data.meanings.map((meaning, index) => (
				<WordMeaning key={index} data={meaning} />
			))}
		</section>
	);
}

export { Results };
