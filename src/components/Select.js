const Select = ( { name, label, id, change} ) => 
{
    return (
        <div className=''>
        <label className='title' htmlFor = { name }>
            { label }
            <select
                className='box'
                name = { name }
                id = { id } 
                required 
                onChange = { change }
            >
                <option value="">-Seleccionar-</option>
                <option value="fire">Fire</option>
                <option value="futurama">Futurama</option>
                <option value="raptor">Raptor</option>
                <option value="history">History</option>
            </select>
        </label>
    </div>
    );
}

export default Select;