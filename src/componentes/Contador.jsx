
function Contador(props) {

  return (
    <div>
        <p id="parrafo">Contador: {props.cont}</p>
        <button onClick = {props.hC}>Incrementar</button>
    </div>
  )
}
export default Contador