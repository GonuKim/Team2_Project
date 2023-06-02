import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et is
            </p>
            <p>
                <a href="/post" data-link>View recent posts</a>
            </p>
        `;
  }
}
