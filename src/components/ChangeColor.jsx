
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeColor} from '../features/theme';
export const  ChangeColor = ()=>{
    const [color, setColor] = useState("");
    const themeColor = useSelector((state)=>state.theme.value)
    const dispatch = useDispatch();
    return(
        <div style={{color:themeColor}}>  <input type='text'placeholder='here' name='color' onChange={(event) => { setColor(event.target.value)}}/>
            <button onClick = {()=>{dispatch(changeColor(color));
            }
            }>

                CHANGE COLOR
            </button>
        </div>
    );
}