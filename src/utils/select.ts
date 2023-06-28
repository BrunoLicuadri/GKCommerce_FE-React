

export const selectStyles = {
    control: (provided: any) => (
        {
            ...provided,
            border: "none",
            minHeight: "40px",
            boxShadow: "none",
            "&:hover": {
                border: "none",
            }
        }),
    placeholder: (provided: any) => (
        {
            ...provided,
            color: "var(--gk-color-font-placeholder)"
        }),
    indicatorSeparator: (provided: any) => (
        {
            ...provided,
            display: "none"
        }),
    option: (provided: any) => (
        {
            ...provided,
            color: "var(--gk-color-font-primary)"
        }
    )
}