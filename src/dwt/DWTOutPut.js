import React from 'react';
import './DWTOutPut.css';

/**
 * @props
 * @prop {function} handleDoubleClick the behavior when the message box is double-clicked
 * @prop {string} note a note (like what happens when you double click)
 * @prop {string[]} messages the messages to print out
 * @prop {boolean} bNoScroll whether the message box should scroll to show the last message
 */
export default class DWTOutPut extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.bNoScroll)
            this.refs.DWTOutPut_message.scrollTop = 0;
        else
            this.refs.DWTOutPut_message.scrollTop = this.refs.DWTOutPut_message.scrollHeight;
    }
    render() {
        return (
            <div className="DWTOutPut">Message: {this.props.note}<br />
                <div ref="DWTOutPut_message" className="message" onDoubleClick={() => this.props.handleDoubleClick()}>
                    <ul>
                        {
                            this.props.messages.map((oneMsg) =>
                                <li key={oneMsg.time + "_" + Math.floor(Math.random(1) * 1000)} className={oneMsg.type}>{oneMsg.text}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}