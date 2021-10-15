import emailjs from 'emailjs-com';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_p6nveq9",
            "template_spwttoc",
            e.target,
            "user_uJEsDqFOUnd8PW6qylaK0"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    

    return (
        <div className="card" style={{ padding: '50px', paddingTop: '60px' }}>
            <div className="row">
                <div className="col-md-4">
                    <div class="contact-info">
                        <img src="https://cdn.dribbble.com/users/1096380/screenshots/6184458/gmail.gif" style={{ width: '600px', marginTop: '80px' }} alt="image" />
                    </div>
                </div>
                <div className="container border"
                    style={{
                        marginTop: "50px",
                        width: "50%",
                        boxShadow: '10px 10px 18px #888888'
                        // backgroundImage:`url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Background-Wallpaper-Images-Desktop.jpg')`,
                        // backgroundPosition:'center',
                        // backgroundSize:'cover'
                    }}>

                    <h1 style={{ marginTop: '25px', textAlign: 'center' }}>Contact Form</h1>
                    <form className="row" style={{ margin: "25px 85px 75px 100px" }}
                        onSubmit={sendEmail}>
                        <label>Recievers' Name</label>
                        <input type="text" name="name" className="form-control" />

                        <label style={{ marginTop: "30px" }}>Email Address</label>
                        <input type="email" name="email" className="form-control" />

                        <label style={{ marginTop: "30px" }}>Message</label>
                        <textarea name="message" rows='4' className="form-control" />

                        <input type="submit" value='Send' className="form-control btn btn-primary"
                            style={{ marginTop: "30px" }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mailer;