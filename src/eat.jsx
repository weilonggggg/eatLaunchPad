import React, { Component } from 'react';
import './eat.css';
import {getData} from './data';
import profile from './13.jpg';
import "bootstrap/dist/css/bootstrap.css";
import { BsFillGearFill } from "react-icons/bs";


class Eat extends Component {
    state = {
        pictures : [],
    }

    componentDidMount(){
        this.setState({pictures : getData()});
    }


    render() { 
        return ( 
            <div>
                <header>
                    <div className="header-wrap">
                        <div className="profile">
                            <img src={profile}/>
                        </div>
                        <div className="information">
                            <div className="name">Jane_Doe</div>
                            <div className="button">
                                <button type="button" className="btn btn-light btn-sm btn-outline-dark">Edit Profile</button>
                            </div>
                            <div className="widget">
                                <BsFillGearFill/>
                            </div>
                            <div className="bio">
                                <p className="postsnumbers">164</p><p className="posts">posts</p>
                                <p className="followersnumbers">188</p><p className="followers">followers</p>
                                <p className="followingnumbers">206</p><p className="following">following</p>
                            </div>
                            <div className="quote">
                                <p className="quotename">Jane Doe</p>
                                <p className="artsy">Lorem ipsum dolar sit, amet consectetur adipisicing elit</p>
                            
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <ul className="pictures">
                        {
                            this.state.pictures.map( picture =>
                                <li className="list">
                                    <div className ="image">
                                        <img src = {`${picture.image}.jpg`} className="pictures"/>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </main>
                <footer className="footer">
                    <p className="content">All Rights Reserved</p>
                </footer>
            </div>
         );
    }
}
 
export default Eat;