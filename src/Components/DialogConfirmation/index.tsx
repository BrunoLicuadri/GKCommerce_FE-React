import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    id: number;
    onDialogAnswer: Function;
}

export default function DialogConfirmation({ message, id, onDialogAnswer}: Props) {

    return (
        <div className="gkc-dialog-info-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="gkc-dialog-box" onClick={(e) => e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="gkc-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(false, id)}>
                        <ButtonInverse text="Não" />
                    </div>
                    <div onClick={() => onDialogAnswer(true, id)}>
                        <ButtonPrimary text="Sim" />
                    </div>
                </div>
            </div>
        </div>
    );
}