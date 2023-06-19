import {useDispatch, useSelector} from "react-redux";
import {login,logout } from '../features/user'
export  default  function Login(){
    const themeColor = useSelector((state)=>state.theme.value)
    const dispatch = useDispatch();
    return (
        <div style={{color:themeColor}}>
            <button onClick ={() => {dispatch(login({name: "denis", age: 0, email: "denis@gmail.com"}))
            }}>login </button>

            <button onClick={() => {dispatch(logout())
            }}>logout</button>
        </div>
    )
}