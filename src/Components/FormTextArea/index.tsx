
export default function FormTextArea(props: any) {

    const { validation, invalid="false", onTurnDirty, dirty="false", ...textareaProps } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }

    return (
        <textarea {...textareaProps} 
        onBlur={handleBlur} 
        data-invalid={invalid} 
        data-dirty={dirty} 
        />
    );
}