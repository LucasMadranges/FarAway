import Item from "./Item.jsx";

export default function PackingList({items, onDeleteItems, onToggleItem}) {
    return (
        <div className="list">
            <ul>
                {
                    items.map((item) => {
                        return (
                            <Item key={item.id}
                                  item={item}
                                  onToggleItem={onToggleItem}
                                  onDeleteItems={onDeleteItems}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}