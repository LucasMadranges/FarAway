import Item from "./Item.jsx";

export default function PackingList() {
    const initialItems = [
        {id: 1, description: "Passports", quantity: 2, packed: false},
        {id: 2, description: "Socks", quantity: 12, packed: true},
        {id: 3, description: "Charger", quantity: 1, packed: false},
    ];

    return (
        <div className="list">
            <ul>
                {
                    initialItems.map((item) => {
                        return (
                            <Item key={item.id}
                                  item={item}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}