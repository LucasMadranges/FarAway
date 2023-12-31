import Item from "./Item.jsx";
import {useState} from "react";

export default function PackingList({items, onDeleteItems, onToggleItem, onCLearList}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map((item) => {
                        return (
                            <Item key={item.id}
                                  item={item}
                                  onToggleItem={onToggleItem}
                                  onDeleteItems={onDeleteItems}/>
                        )
                    })
                }
            </ul>

            <div className="actions">
                <select value={sortBy}
                        onChange={event => setSortBy(event.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onCLearList}>Clear list</button>
            </div>
        </div>
    )
}