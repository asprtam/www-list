import React, { Component } from 'react';
import Sec1 from '../sec1/sec1';
import Sec2 from '../sec2/sec2';
import './wrap.css';

class Wrap extends Component  {
    constructor(props) {
        super(props);
        this.wrap = React.createRef();
        this.state = { sec1Visible: true }
      }
    componentDidMount () {
        window.addEventListener("wheel", (event) => {
            if (event.deltaY < 0) {
                this.wrap.current.style.transform = 'translate(0, 0vh)';
                this.setState({
                    sec1Visible: true
                })
            } else if (event.deltaY > 0) {
                this.wrap.current.style.transform = 'translate(0, -100vh)';
                this.setState({
                    sec1Visible: false
                })
            }
          })
    }
    render() {
        return (
        <div className="wrap" ref={this.wrap}>
            <Sec1 visible={this.state.sec1Visible}/>
            <Sec2 visible={this.state.sec1Visible}/>
        </div>
        );
    }
}

export default Wrap;
