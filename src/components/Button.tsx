type ButtonProps = {
    children : any, 
    onClick : () => void
}
export default function Button({children, onClick}: ButtonProps){

  const style = {
    padding : '10px',
    margin : '10px'
  }

  return (
    <button onClick={onClick} style={style}> 
      {children}
    </button>
  )
}
