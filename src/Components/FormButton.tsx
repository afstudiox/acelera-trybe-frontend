
interface FormButtonProps {
    label: string;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
}

function FormButton({ label, className, type = 'button' }: FormButtonProps) {
    return (
        <button 
            type={type}
            className={className}
        >
            {label}
        </button>
    );
}

export default FormButton;