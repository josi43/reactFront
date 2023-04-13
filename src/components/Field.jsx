import '../Index.css'
function Field(props) {
    return(
        <label>
            <input className='inputbox' type={props.texto} placeholder={props.texto}></input>
        </label>
    )
}

export default Field