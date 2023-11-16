import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('Tapez votre adresse ici!')

    function handleBlur(value){
        if(!value.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
        }
    }
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
            <input type='text' name='my_input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={handleBlur} />
            </div>
		</footer>
	)
}

export default Footer;