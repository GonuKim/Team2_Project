import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('PostView');
    }

    async getHtml() {
        console.log(this.params.id);
        return `
            <h1>Posts</h1>
            <p>
                Fugiat voluptate et is
            </p>
        `;
    }
}