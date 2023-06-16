import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({ message, onDialogClose }: Props) {

    return (
        <div className="gkc-dialog-info-background" onClick={() => onDialogClose()}>
            <div className="gkc-dialog-box" onClick={(e)=> e.stopPropagation()}>
                <h2>{message}</h2>
                <div onClick={() => onDialogClose()} className="gkc-dialog-btn-container">
                    <ButtonPrimary text="OK" />
                </div>
            </div>
        </div>
    );
}