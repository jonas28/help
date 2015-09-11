FlowRouter.route("/", {
    name: "Home",
    action(params) {
        ReactLayout.render(Home, {name: "Jonas"});
    }
});
