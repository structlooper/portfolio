const Header = () => {
    return (
        <div className="d-flex flex-column">
            <div className="profile">
                <img src="https://avatars.githubusercontent.com/u/47849029?v=4" alt=""  className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Deepak Kumar</a></h1>
                <div className="social-links mt-3 text-center">
                    <a href="https://twitter.com/structlooper" target="_blank" className="twitter"><i className="bx bxl-twitter"/></a>
                    <a href="https://www.facebook.com/structlooper" target="_blank" className="facebook"><i className="bx bxl-facebook"/></a>
                    <a href="https://www.instagram.com/structlooper/" target="_blank" className="instagram"><i className="bx bxl-instagram"/></a>
                    {/*<a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>*/}
                    <a href="https://www.linkedin.com/in/structlooper" target="_blank" className="linkedin"><i className="bx bxl-linkedin"/></a>
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"/>
                        <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"/> <span>About</span></a>
                    </li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"/>
                        <span>Resume</span></a></li>
                    {/*<li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>*/}
                    {/*    <span>Portfolio</span></a></li>*/}
                    {/*<li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i>*/}
                    {/*    <span>Services</span></a></li>*/}
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"/>
                        <span>Contact</span></a></li>
                </ul>
            </nav>
        </div>
    );
}
ReactDOM.render(<Header />,document.getElementById('header'))

