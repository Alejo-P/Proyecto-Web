const DropDownList = ({ elements, handleSelection }) => {
  return (
    <select id='miMenuDesplegable' name='tipo' onChange={handleSelection}>
        {elements.map((element) => (
            <option
                key={element}
                value={element}>
                {element}
            </option>
        ))}
    </select>
  )
}

export default DropDownList