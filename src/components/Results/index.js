import useSound from 'use-sound';
import { WordMeaning } from '../';
import { IconPlay, IconNewWindow } from '../../icons';

import './Results.css';

function Results({ data, fetchData }) {
	const audio = data.phonetics.find(
		(phonetic) => phonetic.audio && phonetic.audio.length > 5 // Some audio files are empty or contain only a few bytes of dummy data
	)?.audio;
	const [play] = useSound(audio);

	return (
		<section className='Results'>
			<div className='Results__header'>
				<div className='Results__word-info'>
					<h1 className='Results__word'>{data.word}</h1>
					<p className='Results__word-phonetic'>{data.phonetic}</p>
				</div>
				<div
					className={`Results__audio${!audio ? ' Results__audio--disabled' : ''}`}
					onClick={play}
				>
					<IconPlay />
				</div>
			</div>

			{data.meanings.map((meaning, index) => (
				<WordMeaning key={index} data={meaning} fetchData={fetchData} />
			))}

			<div className='Results__footer'>
				<span className='Results__horizontal-line' />
				{data.sourceUrls && data.sourceUrls.length > 0 && (
					<div className='Results__footer-info'>
						<h3 className='Results__footer-heading'>Source</h3>
						{data.sourceUrls.map((url, index) => (
							<a
								className='Results__footer-source-url'
								href={url}
								key={`${url}-${index}`}
								target='_blank'
								rel='noreferrer noopener'
							>
								{url} <IconNewWindow />
							</a>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export { Results };
