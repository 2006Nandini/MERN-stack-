import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Hooks = () => {
  return (
    <div>
        <ol>
            <li><Link to='useState'>useState</Link></li>
            <li><Link to='useEffect'>useEffect</Link></li>
            <li><Link to='useEffectApi'>useEffectApi</Link></li>
            <li><Link to ='useRef'>UseRef</Link></li>
            <li><Link to ='useReducer'>UseReducer</Link></li>
            <li><Link to ='useMemo'>UseMemo</Link></li>
            <li><Link to ='useCallBack'>UseCallBack</Link></li>
        </ol>
        <Outlet/>
      
    </div>
  )
}

export default Hooks
