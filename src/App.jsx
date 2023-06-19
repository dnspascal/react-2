
import Profile from "./components/Profile.jsx";
import Login from "./components/Login";
import {ChangeColor} from "./components/ChangeColor.jsx";
export default function App() {
    return (
        <h1 className="">
            <Profile/>
            <Login/>
            <ChangeColor/>
        </h1>
    )
}