import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    onDialogConfirmationAnswer: Function;
}

export default function DialogInfo({ message, onDialogConfirmationAnswer }: Props) {

    return (
        <div className="gkc-dialog-info-background" onClick={() => onDialogConfirmationAnswer(false)}>
            <div className="gkc-dialog-box" onClick={(e) => e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="gkc-dialog-btn-container">
                    <div onClick={() => onDialogConfirmationAnswer(false)}>
                        <ButtonPrimary text="Não" />
                    </div>
                    <div onClick={() => onDialogConfirmationAnswer(true)}>
                        <ButtonInverse text="Sim" />
                    </div>
                </div>
            </div>
        </div>
    );
}