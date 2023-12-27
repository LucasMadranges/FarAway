import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";
import {useState} from "react";

export default function App() {
    const [items, setItems] = useState([])

    function handleAddItems(item) {
        setItems(i => [...i, item]);
    }

    function handleDeleteItems(id) {
        setItems(items => items.filter(item => item.id !== id))
    }

    function handleToggleItem(id) {
        setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
    }

    function handleClearList() {
        const confirmed = window.confirm('Are you sure you want to delete all items ?');

        confirmed ? setItems([]) : null;
    }

    return (
        <>
            <div className="app">
                <Logo/>
                <Form onAddItems={handleAddItems}/>
                <PackingList onDeleteItems={handleDeleteItems}
                             onToggleItem={handleToggleItem}
                             onCLearList={handleClearList}
                             items={items}/>
                <Stats items={items}/>
            </div>
        </>
    )
}
