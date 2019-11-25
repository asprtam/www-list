import React, { Component } from 'react';
import mainImg from '../img/main-img2.png';
import Message from './message';
import './sec1.css';

class Sec1 extends Component  {
    constructor(props) {
        super(props);
        this.sec1 = React.createRef();
        this.mainImg = React.createRef();
        this.circle = React.createRef();
        this.blueCircle = React.createRef();
        this.secondBlueCircle = React.createRef();
        this.shLk = React.createRef();
    }
    _onMouseMove(e) {
        let x;
        let y;
        if(e.screenX<window.innerWidth/2) {
            x = e.screenX/window.innerWidth*-1;
        } else {
            x = (window.innerWidth-e.screenX/2)/window.innerWidth;
        }
        if(e.screenY<window.innerHeight/2) {
            y = e.screenY/window.innerHeight*-1;
        } else {
            y = (window.innerHeight-e.screenY/2)/window.innerHeight;
        }
        this.mainImg.current.style.transform = `translate(${x}vw, ${y}vw)`;
        this.circle.current.style.transform = `translate(${x*1.5}vw, ${y*1.5}vw)`;
        this.blueCircle.current.style.transform = `translate(${e.screenX/window.innerWidth*-1.5}vw, ${e.screenY/window.innerWidth*-1.5}vw)`;
        this.secondBlueCircle.current.style.transform = `translate(${e.screenX/window.innerWidth*2}vw, ${e.screenY/window.innerWidth*2}vw)`;
        this.shLk.current.style.transform = `translate(${e.screenX/(window.innerWidth)}vw, ${e.screenY/(window.innerWidth)}vw)`;
      }
    componentDidUpdate() {
        if (this.props.visible==false) {
            this.sec1.current.style.opacity = `0`;
        } else {
            this.sec1.current.style.opacity = `1`;
        }
    }
    componentDidMount () {
        if (this.props.visible==false) {
            this.sec1.current.style.opacity = `0`;
        } else {
            this.sec1.current.style.opacity = `1`;
        }
    }
    render () {
        const createCircles = (amount) => {
            const personTable = []
            for (let i=0; i<amount;i++){           
                personTable.push(<div style={{animation: `grow 3s linear ${i/2}s infinite`}}></div>)
            }
            return (personTable)
        }
        return (
        <div className="sec1" onMouseMove={this._onMouseMove.bind(this)} ref={this.sec1}>
            <Message />
            <div className="sh-lk" ref={this.shLk}></div>
            <div className="bluecircle" ref={this.blueCircle}></div>
            <img src={mainImg} ref={this.mainImg}/>
            <div className="circle" ref={this.circle}>
                {createCircles(6)}
            </div>
            <div className="half-circle" ref={this.halfCircle}><div></div></div>
            <div className="secondbluecircle" ref={this.secondBlueCircle}></div>
        </div>
        );
    }
}

export default Sec1;
