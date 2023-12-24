import Item from "./Item.jsx";

export default function PackingList({items, onDeleteItems}) {
    return (
        <div className="list">
            <ul>
                {
                    items.map((item) => {
                        return (
                            <Item key={item.id}
                                  item={item}
                                  onDeleteItems={onDeleteItems}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}