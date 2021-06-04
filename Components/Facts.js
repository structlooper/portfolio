const Facts = () => {
    return (
        <div className="container">

            <div className="section-title">
                <h2>Facts</h2>
                <p>I geek out over things I really like, and it doesn’t matter what it is. Coding and music are probably my top two but they can also be ideas, movies, books, food, etc.</p>
            </div>

            <div className="row no-gutters">

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                    <div className="count-box">
                        <i className="bi bi-code-slash"></i>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p><strong>Coding</strong> </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                     data-aos-delay="200">
                    <div className="count-box">
                        <i className="bi bi-headset"></i>
                        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p><strong>Music</strong> </p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                     data-aos-delay="100">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p><strong>Reading</strong> </p>
                    </div>
                </div>

             
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up"
                     data-aos-delay="300">
                    <div className="count-box">
                    <i className="bi bi-map"></i>
                        <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p><strong>Travelling</strong> </p>
                    </div>
                </div>

            </div>

        </div>

    )
}
ReactDOM.render(<Facts/>, document.getElementById('facts'))
