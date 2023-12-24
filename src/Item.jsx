export default function Item({item, onDeleteItems}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: 'line-through'} : null}>{item.description} {item.quantity}</span>
            <button onClick={() => onDeleteItems(item.id)}>❌</button>
        </li>
    )
}