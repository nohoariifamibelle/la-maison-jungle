function CareScale({scaleValue, careType}){
    
    const range = [1,2,3];
    const scaleType = careType === 'light' ? '☀️' : '💧';

    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
    return (
        <div 
            onClick={() => alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrossage"}`)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>)
}

export default CareScale;