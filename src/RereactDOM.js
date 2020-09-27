import * as Rereact from './Rereact.js';

export function render(comp, dom) {
    if(comp instanceof Rereact.Component) {
        dom.appendChild(comp.getDOM());
        comp.componentDidMount();
    }
}
