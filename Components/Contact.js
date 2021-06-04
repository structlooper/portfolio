const Contact = () => {
    return (
        <form action="#" method="post" role="form" className="php-email-form">
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
            </div>
            <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center">
                <button type="button" onClick={() => {alert('Message send successfully')}} className={'btn btn-primary'}>Send Message</button>
            </div>
        </form>
    )
}
ReactDOM.render(<Contact/>, document.getElementById('contactForm'))
