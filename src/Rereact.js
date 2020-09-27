import JSX from './JSX.js';

/**
 * @url https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */

export class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.jsx = null;
    }

    /** @lifecycle */
    getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    /** @lifecycle */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    /** @lifecycle */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    /** @lifecycle */
    render() {
        console.log('render');
        return new JSX();
    }

    /** @lifecycle */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /** @lifecycle */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    /** @lifecycle */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    getDOM() {
        this.getDerivedStateFromProps();
        this.jsx = this.render();
        return this.jsx.getDOM();
    }

    setState(arg) {
        if(typeof arg === 'object') {
            this.state = { ...this.state, ...arg };
        } else if(typeof arg === 'function') {
            const state = {...this.state};
            const props = {...this.props};
            this.state = { ...this.state, ...arg(state, props) };
        }

        const derivedState = this.getDerivedStateFromProps();
        const shouldUpdate = this.shouldComponentUpdate();
        this.jsx.setDOM(this.render());
        const snapshot = this.getSnapshotBeforeUpdate();
        this.componentDidUpdate();
    }
}
