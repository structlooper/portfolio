const Footer = () => {
    return (
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Deepak Kumar</span></strong>
                    </div>
                    <div className="credits">
                        Designed by <a href="javascript:void(0)">Structlooper</a>
                    </div>
                </div>
            )
}
ReactDOM.render(<Footer/>, document.getElementById('footer'))
