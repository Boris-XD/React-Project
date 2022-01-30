const Form = ( { children, submit } ) =>
{
    return (
        <form onSubmit = { submit }>
            { children }
        </form>
    )
}

export default Form;