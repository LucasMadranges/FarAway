export default function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: 'line-through'} : null}>{item.description} {item.quantity}</span>
            <button>❌</button>
        </li>
    )
}