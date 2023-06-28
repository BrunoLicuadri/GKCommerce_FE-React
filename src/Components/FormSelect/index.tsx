import Select from "react-select";

export default function FormSelect(props: any) {

    const { validation, invalid = "false", onTurnDirty, dirty = "false", className, ...selectProps } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <div
            data-dirty={dirty}
            data-invalid={invalid}
            className={className}
        >
            <Select
                {...selectProps}
                onBlur={handleBlur}
            />
        </div>
    );
}