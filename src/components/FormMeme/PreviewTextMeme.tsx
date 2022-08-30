import { FormMeme } from '../../types/Form';
import Form from '../Form';

interface Props {
	inputsData: FormMeme;
	handleChangeTextMeme: (e: React.ChangeEvent<HTMLInputElement>) => void;
	addNewTextMeme: () => void;
}

function PreviewTextMeme({ inputsData, handleChangeTextMeme, addNewTextMeme }: Props) {
	return (
		<>
			<div className='relative'>
				<img src={inputsData.image_url} alt='create meme' className='relative w-100' />
				{inputsData.texts?.map((textMeme) => (
					<div
						key={textMeme.id}
						className='absolute'
						style={{ bottom: textMeme.y, left: textMeme.x, fontSize: textMeme.fs }}
					>
						{textMeme.text}
					</div>
				))}
			</div>
			<button onClick={addNewTextMeme}>Add text</button>
			<ul>
				{inputsData.texts?.map((textMeme) => (
					<li key={textMeme.id}>
						<Form.InputLabel
							label='Texto 1:'
							type='text'
							name={`textMeme-text-${textMeme.id}`}
							value={textMeme.text}
							onChange={handleChangeTextMeme}
						/>
						<Form.InputLabel
							label='X:'
							type='number'
							name={`textMeme-x-${textMeme.id}`}
							value={textMeme.x}
							onChange={handleChangeTextMeme}
						/>
						<Form.InputLabel
							label='Y:'
							type='number'
							name={`textMeme-y-${textMeme.id}`}
							value={textMeme.y}
							onChange={handleChangeTextMeme}
						/>
						<Form.InputLabel
							label='Font-size:'
							type='number'
							name={`textMeme-fs-${textMeme.id}`}
							value={textMeme.fs}
							onChange={handleChangeTextMeme}
						/>
					</li>
				))}
			</ul>
		</>
	);
}

export default PreviewTextMeme;