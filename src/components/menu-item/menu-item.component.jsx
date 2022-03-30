import React from "react";
import './menu-item.styles.scss';

//history and match parameters only available here due to use of withRouter HOF
const MenuItem = ({ item, history, match}) => (
    
            <div className= {`${item.size} menu-item`} onClick={()=> history.push(`${match.url}${item.linkUrl}`)}>
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
           
            
)

export default MenuItem;