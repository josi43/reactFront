import Navbar from "./Navbar"
import Titulo from "./Titulo"

export default function Header(props){
    return
    <header>
        <Titulo texto={props.titulo}/>
        <Navbar items={[props.menus]}/>
    </header>
}