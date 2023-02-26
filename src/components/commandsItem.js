import React from 'react'
import "./styles/commands.css";
function CmdItem(props) {

    return (
        <div className="command-items">
            <div className='command'>
                <div className='upper-command'>
                    <img alt='' src={props.icon} width="40px" className='command-icon'></img>
                    <h2 className='upper-title-command'><a style={{textDecoration: "none"}}href={props.href}>{props.title}</a></h2>
                </div>
                <div className='command-description'>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CmdItem