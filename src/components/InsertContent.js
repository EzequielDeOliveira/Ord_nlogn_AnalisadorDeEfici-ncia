import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InsertContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            compareWeight: '',
            swapWeight: '',
            error: false,
            weightError: false
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

    handleChangeCompareWeight = (e) => {
        if (this.state.weightError === true) {
            this.setState({
                weightError: false,
            })
        }
        this.setState({ compareWeight: e.target.value });
    }

    handleChangeSwapWeight = (e) => {
        if (this.state.weightError === true) {
            this.setState({
                weightError: false,
            })
        }
        this.setState({ swapWeight: e.target.value });
    }


    validateInput = (value) => {
        let reg = /^(\d+ ?( ?, ?\d ?)*)$/;
        console.log(reg.test(value));
        return (reg.test(value));
    }

    handleSubmit = () => {

        let array = false;
        let compareWeight = false;
        let swapWeight = false;

        this.validateInput(this.state.value.trim()) ?
            array = !array
            :
            this.setState({
                error: true,
            })

        this.validateInput(this.state.compareWeight) ?
            compareWeight = !compareWeight
            :
            this.setState({
                weightError: true,
            })


        this.validateInput(this.state.swapWeight) ?
            swapWeight = !swapWeight
            :
            this.setState({
                weightError: true,
            })



        if(array && compareWeight && swapWeight) 
            this.props.FinalArray(this.state.value.trim().split(','), parseInt (this.state.compareWeight), parseInt(this.state.swapWeight));
    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.title} >Calculate Efficiency </h1>
                <div style={styles.field}>
                    <TextField
                        fullWidth
                        label="Array (Ex. 1,2,3,4,5,6,......)"
                        multiline
                        value={this.state.value}
                        onChange={this.handleChange}
                        margin="normal"
                        style={styles.input}
                        error={this.state.error}
                    />
                </div>
                <div style={styles.weight}>
                    <h4>Dificuldade de verificações</h4>
                    <TextField
                        label="Ex. 0"
                        margin="dense"
                        variant="filled"
                        style={styles.weightField}
                        onChange={this.handleChangeCompareWeight}
                        error={this.state.weightError}
                    />
                </div>
                <div style={styles.weight}>
                    <h4>Dificuldade de swaps</h4>
                    <TextField
                        label="Ex. 0"
                        margin="dense"
                        variant="filled"
                        style={styles.weightField}
                        onChange={this.handleChangeSwapWeight}
                        error={this.state.weightError}
                    />
                </div>
                <Button variant="contained" color="primary" style={styles.button} onClick={() => this.handleSubmit()}>
                    Go
                    </Button>
            </div>
        );
    }
};

const styles = {
    weightField: {
        display: 'flex',
        width: '80px',
        borderRadius: '20px',
    },
    weight: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    field: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'normal'
    },
    button: {
        height: '50px',
        width: '200px',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        heigth: '50vh',
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