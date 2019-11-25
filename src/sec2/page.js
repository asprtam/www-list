import React, { Component } from 'react';
import './sec2.css';

class Page extends Component {
    render () {
        return (
            <div className="page"><a className="imgLink" href={this.props.link}><img src={this.props.photo}/></a><a className="source" href={this.props.source}>Kod źródłowy: {this.props.source}</a></div>
        )
    }
}

export default Page;