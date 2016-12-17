var StaticGraph = React.createClass({displayName: "StaticGraph",
    componentWillMount: function() {
        this.styles = {
            node: { label: { hideSize: 14 } },
            edge: { arrow: { texture: "images/arrow.png", hideSize: 2 } },
            internal: { texture: "images/red.png" },
            external: { texture: "images/blue.png" },
            positive: { color: "rgb(171, 237, 199)" },
            negative: { color: "rgb(244, 172, 164)" }
        };
    },
    componentDidMount: function() {
        utils.ajax("http://helikarlab.github.io/ccNetViz/data/" + this.props.data, null, function(data)  {
            var nodes = data.nodes;
            var edges = data.edges.map(function(e)  {return { source: nodes[e.source], target: nodes[e.target], style: e.style };});
            var graph = this.refs.graph.self;
            graph.set(nodes, edges, "force");
            graph.draw();
        }.bind(this));
    },
    render: function() {
        return (React.createElement(Graph, {ref: "graph", styles: this.styles, parentWidth: this.props.parentWidth, parentHeight: this.props.parentHeight}));
    }
});