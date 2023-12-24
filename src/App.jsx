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

    return (
        <>
            <div className="app">
                <Logo/>
                <Form onAddItems={handleAddItems}/>
                <PackingList onDeleteItems={handleDeleteItems}
                             items={items}/>
                <Stats/>
            </div>
        </>
    )
}
