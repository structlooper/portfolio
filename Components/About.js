const About = () => {
    return (
        <div>
            <h3>UI/UX Developer, Web Developer & Application Developer.</h3>
            <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua.
            </p>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>29 May 1997</span>
                        </li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7678178911</span>
                        </li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New Delhi, India</span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engineer</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                            <span>structlooper@gmail.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<About />,document.getElementById('aboutSection'))
