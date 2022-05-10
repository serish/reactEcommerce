import React from "react";
import { useNavigate } from "react-router-dom";
import './menu-item.styles.scss';

//history and match parameters only available here due to use of withRouter HOF
const MenuItem = ({ item, history, match}) => {
const navigate = useNavigate();
const onNavigateHandler = () => navigate(item.linkUrl);
return(
    
            <div className= {`${item.size} menu-item`} onClick={onNavigateHandler}>
                <div className="background-image" 
                     style=
                    {{
                        background: `url(${item.imageUrl})`
                    }} />
                <div className='content'>
                    <h1 className='title'>{item.title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
           
            
)}

export default MenuItem;