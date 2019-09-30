import React, { Component } from 'react';
import InsertContent from '../../components/InsertContent';
import QuickSort from '../../algorithmns/QuickSort';
import MergeSort from '../../algorithmns/MergeSort';
import CountSort from '../../algorithmns/CountSort';
import ResultComponent from '../../components/ResultComponent';
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            compareWeight: 0,
            swapWeight: 0,
            quickSort: '',
            mergeSort: '',
            countSort: '',
            results: []
        };
    }

    FinalArray = (arr, compareWeight, swapWeight) => {
        let newArray = arr.map(item => {
            return parseInt(item);
        });

        this.setState({ value: newArray, compareWeight: compareWeight, swapWeight: swapWeight, quickSort: new QuickSort(newArray), mergeSort: new MergeSort(newArray), countSort: new CountSort(newArray) }, () => {
            this.setState({ results: [...this.state.results, this.state.quickSort.getResult(), this.state.mergeSort.getResult(), this.state.countSort.getResult()] });
        });
    }

    compareSwaps(a, b) {
        if (a.swaps < b.swaps) {
            return -1;
        }
        if (a.swaps > b.swaps) {
            return 1;
        }
        return 0;
    }

    compareComparisons(a, b) {
        if (a.comparisons < b.comparisons) {
            return -1;
        }
        if (a.comparisons > b.comparisons) {
            return 1;
        }
        return 0;
    }

    restart = () => {
        this.setState({
            results: []
        })
    }

    renderResults = () => {
        let {results} = this.state;
        results.sort(this.compareSwaps);
        results.sort(this.compareComparisons);
        return (
            <>
                {results.map((item, index) => {
                    if (index === 0) {
                        return <ResultComponent result={item} win={true} />
                    } else {
                        return <ResultComponent result={item} />
                    }
                })}
                <Button
                    style={styles.button}
                    onClick={this.restart}
                    >
                    
                    Again!
                    
                </Button>
            </>
        );
    }

    render() {
        return (
            <main style={styles.main}>
                {
                    this.state.results.length === 0 ?
                        <InsertContent FinalArray={this.FinalArray} />
                        :
                        this.renderResults()
                }
            </main>
        );
    }
};

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'blue',
        width: '100vw',
        height: '100vh',
    },
    button: {
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        borderRadius: '5px',
        height: '60px',
        width: '100px',
        backgroundColor: 'white' 
    }
};

export default Home;