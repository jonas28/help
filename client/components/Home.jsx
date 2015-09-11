const {
    RaisedButton,
    AppBar
    } = mui;

const ThemeManager = new mui.Styles.ThemeManager();

Home = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    render() {
        return (
            <div>
                <AppBar
                    title="Chat for help"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <h1 className="title">Chat for help</h1>
                <div className="subtitle">Refugees meets volunteers</div>
                <RaisedButton label="Let´s go" />
            </div>
        )
    }
});