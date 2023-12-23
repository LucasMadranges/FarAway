import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

export default function App() {
    return (
        <>
            <div className="app">
                <Logo/>
                <Form/>
                <PackingList/>
                <Stats/>
            </div>
        </>
    )
}
