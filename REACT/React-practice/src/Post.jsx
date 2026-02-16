const style = { width : 200, backgroundColor : 'white', borderColor : 'gray', borderWidth : 1, borderRadius : 10, padding : 10, margin : 10 }

export function PostComponent({name, subtitle, time, image, description}) {
  return (
    <div style={style}>
      <img src={image} style={{ 
        width: 30,
        height: 30,
        borderRadius: 20
        }} />
       <div style={{ marginLeft: 10 }}>
         <h3>{name}</h3>
         <p>{subtitle}</p>

       </div>
    </div>
  )
}