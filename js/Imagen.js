class Imagen extends React.Component {
    render () {
        return <img className={this.props.className} src={this.props.url} alt={this.props.alt} />;
    }
}

export default Imagen;