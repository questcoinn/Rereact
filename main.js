import * as Rereact from './src/Rereact.js';
import * as RereactDOM from './src/RereactDOM.js';
import JSX from './src/JSX.js';

class Incrementor extends Rereact.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease() {
        this.setState((state, props) => ({ count: state.count + 1 }));
    }

    handleDecrease() {
        this.setState((state, props) => ({ count: state.count - 1 }));
    }

    render() {
        return new JSX({
            tag: 'div',
            children: [
                new JSX({ tag: 'button', text: '-', on: { click: [this.handleDecrease] } }),
                new JSX({ tag: 'span', text: this.state.count }),
                new JSX({ tag: 'button', text: '+', on: { click: [this.handleIncrease] } })
            ]
        });
    }
}

RereactDOM.render(new Incrementor(), document.getElementById('app'));