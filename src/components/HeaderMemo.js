
import { memo } from "react"

  function Header  (){
    console.log('header render oluyor.')
    return(
        <header>HEADER</header>
    )
}
export default memo(Header)