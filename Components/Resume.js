const Resume = () => {
    return (
        <div className="container">

            <div className="section-title">
                <h2>Resume</h2>
            </div>

            <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                        <h4>Deepak Kumar</h4>
                        <p><em>Efficient and deadline-driven Full-Stack Developer with 2+ years of experience designing
                            and developing softwares.</em></p>
                        <ul>
                            <li>(+91) 767-817-8911</li>
                            <li>Structlooper@gmail.com</li>
                        </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>

                    <div className="resume-item">
                        <h4>Bachelor of Technology(B.tech)</h4>
                        <h5>Computer Science &amp; Engineering </h5><br />
                        <h5>2016 - 2020</h5>
                        <p><em>Ganga institute of Technology and Management</em></p>
                        <p> I've got 99 problems and 97 of them are due by the end of the week. The other two were due
                            last week. </p>
                    </div>
                    <div className="resume-item">
                        <h4>Raghubir Singh Modern
                            Sr.Sec School
                        </h4>
                        <h5>Science &amp; Non-Medical</h5>
                        <br />
                        <h5>2014 - 2016 </h5>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                        <h4>Full-Stack Developer</h4>
                        <h5>2020 - Present</h5>
                        <p><em>Gurugram, Haryana India </em></p>
                        <ul>
                            <li>Lead in the development, and implementation of the Logic, layout of softwares</li>
                            <li>Delegate tasks to the interns of the Development team and provide help to develop the
                                project.
                            </li>
                            <li>Design & Develop softwares according to client requirement.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Backend Developer</h4>
                        <h5>2019 - 2020</h5>
                        <p><em>New Delhi, India</em></p>
                        <ul>
                            <li>Developed Backend for frontend developer (apis, logic, structures).</li>
                            <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                            <li>Created whole e-commerce based project's admin panel and Backend with in 10 Days.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(<Resume />,document.getElementById('resume'))
