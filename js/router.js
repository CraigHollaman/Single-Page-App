// prevents default and changes the URL to whats clicked om the navigation.
const ROUTER = (event) => {
event = event || window.event;
event.preventDefault();
window.history.pushState({}, "", event.target.href)
HANDLELOCATION();
};

// Captures the path name and loads the appropriate html
const HANDLELOCATION = async () => {
const PATH = window.location.pathname
const ROUTE = ROUTES[PATH]
const HTML = await fetch(ROUTE).then((data) => data.text());
    document.getElementById("main").innerHTML = HTML;
};

// Routes ojects
const ROUTES = {
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    "/": "/pages/index.html"
}

// forward and back buttons
window.onpopstate = HANDLELOCATION;
window.route = ROUTER;

HANDLELOCATION();