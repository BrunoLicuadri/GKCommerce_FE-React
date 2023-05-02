import './styles.css';

type Props = {
    text: string;
}

export default function ButtonInverse({ text }: Props) {
    return (
        <div className="gkc-btn gkc-btn-white">
            {text}
        </div>
    );
}