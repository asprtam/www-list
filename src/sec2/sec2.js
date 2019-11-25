import React, { Component } from 'react';
import './sec2.css';
import Page from './page';
import sunGradient from '../img/sunGradient.png';
import Kawiarnia from '../img/kawiarnia.png';

class Sec2 extends Component {
    constructor(props) {
        super(props);
        this.sec2 = React.createRef();
    }
    componentDidUpdate() {
        if (this.props.visible===true) {
            this.sec2.current.style.opacity = `0`;
        } else {
            this.sec2.current.style.opacity = `1`;
        }
    }
    componentDidMount () {
        if (this.props.visible===true) {
            this.sec2.current.style.opacity = `0`;
        } else {
            this.sec2.current.style.opacity = `1`;
        }
    }
    render () {
        return (
            <div className="sec2" ref={this.sec2}>
                <h1>Przykładowe Strony</h1>
                <div className='pages'>
                    <Page link="https://asprtam.github.io/react_sun_gradient/" photo={sunGradient} source={'https://github.com/asprtam/react_sun_gradient_src'}/>
                    <Page link="https://sad-fermi-3dcd93.netlify.com/" photo={Kawiarnia} source={'view-source:https://sad-fermi-3dcd93.netlify.com/'}/>
                </div>
            </div>
        )
    }
}

export default Sec2;