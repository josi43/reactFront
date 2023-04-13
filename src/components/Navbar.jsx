export default function Navbar(props){
    return 
    <ul>
       {props.items.map((item) => <li key="{item}">{item}</li>)} 
    </ul>;
}