import React, { Component } from 'react';

class ResultComponent extends Component {

    render() {
        return (
            <div style={this.props.win ? { ...styles.container, backgroundColor: '#ffd700' } : styles.container}>
                <div>Algoritimo {this.props.result.name}</div>
                <div>Swaps: {this.props.result.swaps}</div>
                <div>Comparações: {this.props.result.comparisons}</div>
            </div>
        );
    }
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        height: '30vh',
        width: '30vw',
        backgroundColor: '#dedede',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px'
    },
};

export default ResultComponent;