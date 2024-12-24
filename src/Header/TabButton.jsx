
export default function TabButton({children,onselect,isSelected}) {

    // here the function is passed a value to the onclick props
    return <li className={isSelected ? 'active':undefined}><button onClick={onselect}>{children}</button></li>
}