export default function TabButton({text, isSelected, ...props }){

    return (
        <li>
            <button {...props} className={isSelected ? 'active' : undefined}>{text}</button>
        </li>
    );
}