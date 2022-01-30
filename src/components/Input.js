const Input = ( { name, id, content, change } ) =>
{
    return (
        <>
            <label htmlFor= { name } >{ content }</label>
            <input
                name = { name }
                id = { id }
                required
                onChange = { change }
            >
            </input>
        </>
    );
}

export default Input;