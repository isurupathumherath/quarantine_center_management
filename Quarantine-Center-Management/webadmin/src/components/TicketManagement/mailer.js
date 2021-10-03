const Mailer = () => {
    return(
        <div>
            <hi>Contact Form</hi>
            <form>
                <label>name</label>
                <input type="text" name="name"/>

                <label>Email</label>
                <input type="email" name="user_email"/>
                
                <label>Message</label>
                <textarea name="message" rows='4'/>
                <input type="submit" value='Send'/>
            </form>
        </div>
    );
};

export default Mailer;