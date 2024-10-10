
interface FormButtonProps {
    label: string;
    type?: 'submit' | 'reset' | 'button';
}

function FormButton({ label, type = 'button' }: FormButtonProps) {
    return (
        <button type={type}>
            {label}
        </button>
    );
}

export default FormButton;