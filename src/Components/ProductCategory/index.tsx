import './styles.css';

type Props ={
    name:String;
}

export default function ProductCategory( {name}: Props) {
    return (
        <div className = "gkc-category">  {name} </div >
    );
}