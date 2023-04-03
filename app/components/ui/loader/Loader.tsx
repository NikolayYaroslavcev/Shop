import { FC } from 'react'

import spinner from './loader.svg'


export const Loader: FC = () => {
	return (
		<img src={spinner.src} alt="loader" width={200} height={200}/>
	)
}


