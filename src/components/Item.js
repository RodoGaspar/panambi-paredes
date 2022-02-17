const Item = (size, foto, precio) => {
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #7630E6'
            }}
        >
            <h3>{size}</h3>
            <img src={foto} width='150px' alt={size}/>
            <h4>{precio}</h4>
        </div>
    );

};

export default Item