import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InsertContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
        };
    }

    handleChange = (e) => {
        if (this.state.error === true) {
            this.setState({
                error: false,
            })
        }
        this.setState({ value: e.target.value });
    }

    validateInput = () => {
        var reg = /((\d(,))+)/;
        return reg.test(this.state.value);
    }

    handleSubmit = () => {
        if (!this.state.value) {
            this.setState({
                error: true,
            })
        }

        if(this.validateInput()){

        }

    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.title} >Insert Your Array Separated With Comma</h1>
                <div style={styles.field}>
                    <TextField
                        fullWidth
                        label="1,2,3,4,5,6,......"
                        multiline
                        value={this.state.value}
                        onChange={this.handleChange}
                        margin="normal"
                        style={styles.input}
                        error={this.state.error}
                    />
                    <Button variant="contained" color="primary" style={styles.button} onClick={() => this.handleSubmit()}>
                        Ok
                    </Button>
                </div>
            </div>
        );
    }
};

const styles = {
    field: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'normal'
    },
    button: {
        height: '50px',
        marginTop: '10px'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        heigth: '30vh',
        width: '50vw',
        backgroundColor: '#dedede',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px'
    },
    input: {
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px'
    }
};

export default InsertContent;