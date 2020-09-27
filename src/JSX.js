class JSX {
    constructor({ tag = 'div', text = '', attrs = {}, children = [], on = {} }) {
        this.tag = tag;
        this.text = text;
        this.attrs = attrs;
        this.children = children; // jsx
        this.on = on;

        this.dom = null;
    }

    getDOM() {
        if(!this.dom) {
            this.dom = document.createElement(this.tag);

            if(this.text !== '') this.dom.innerText = this.text;

            for(let key in this.attrs) {
                this.dom.setAttribute(key, this.attrs[key]);
            }

            for(let child of this.children) {
                this.dom.appendChild(child.getDOM());
            }

            for(let type in this.on) {
                for(let handler of this.on[type]) {
                    this.dom.addEventListener(type, handler);
                }
            }
        }
        return this.dom;
    }

    setDOM(another) {
        if(!(another instanceof JSX)) throw new TypeError();

        const { text, attrs, children } = another; // tag가 바뀔일은 없다고 가정

        if(this.text !== text) {
            this.text = text;
            this.dom.innerText = text;
        }

        for(let key in this.attrs) {
            if(!(key in attrs) || this.attrs[key] !== attrs[key]) {
                this.attrs[key] = attrs[key];
                this.dom.setAttribute(key, attrs[key]);
            }
        }

        for(let key in attrs) {
            if(!(key in this.attrs)) {
                delete this.attrs[key];
                this.dom.removeAttribute(key);
            }
        }

        for(let i = 0; i < this.children.length; i++) {
            this.children[i].setDOM(children[i]);
        }
    }
}

export default JSX;