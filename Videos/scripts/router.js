class Router {
    use(routes) {
        //console.log({ routes });
        this.routes = routes;
    }

    static getPath() {
        const path = location.hash.slice(1);
        if (path === '') {
            return '/';
        } else {
            return path;
        }
    }

    #resolveRoute() {
        const main = document.querySelector('main');
        while (main?.firstElementChild) {
            main?.firstElementChild?.remove();

        }
        const handler = this.routes[Router.getPath()];
        handler?.();
    }

    start() {
        this.#resolveRoute();
        window.addEventListener('hashchange', this.#resolveRoute.bind(this));
    }


}