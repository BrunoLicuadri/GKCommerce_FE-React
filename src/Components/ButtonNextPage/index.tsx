import './styles.css';

type Props={
    onNextPage: Function;
}
export default function ButtonNextPage( {onNextPage}: Props) {
    return (
        <div onClick={ ()=>onNextPage()} className="gkc-btn-next-page">
            Carregar Mais
        </div>
    );
}