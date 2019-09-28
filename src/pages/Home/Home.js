import React, { Component } from 'react';
import './Home.css'
import InsertContent from '../../components/InsertContent';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main>
                <InsertContent />
            </main>
        );
    }
};

export default Home;