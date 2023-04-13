import Header from "./Header";
import Main from "./Main";

export default function Home(props) {
    return 
    <>
        <Header titulo="Meu Site" menus={["home", "Sair"]}/>
        <Main><h2>Página Inicial</h2></Main>
    </>
}