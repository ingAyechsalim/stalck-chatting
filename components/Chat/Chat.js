import React from "react";
import io from "socket.io-client";
import './Chat.css'
class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:8080');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div className="container">
               
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Bienvenue sur Stalk</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>
                                          <label className='users'> <i className="fa fa-user-circle-o"> {message.author}:</i></label>
                                          <label className='messagesusers'>                           {message.message}                     </label>


                                 
                                       </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div>
                                <input  type="text" placeholder='ton pseudo nom' value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/>
                                <input  type="text" placeholder="tapez votre message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="button"><span>send </span></button>
                            </div>
                        </div>
                                </div>
        );
    }
}

export default Chat;