import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: ''
    });
    const currentDate = new Date().toISOString().split('T')[0]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // alert('Inquiry sent successfully');
                toast.success("Your message has been sent successfully!");
            } else {
                alert('Failed to send inquiry');
            }
        } catch (error) {
            console.error('Error sending inquiry:', error);
            alert('Failed to send inquiry');
        }
    };

    return (
        <div className="contactUsBody">
            <p className="contactUsIntro">contact us</p>
            <div className="contactUsParas">
                <p>We would love nothing more than to be a part of your special day!</p>
                <p>Please fill out the inquiry form below and we will get back to you as soon as possible. You can also email us directly at <a href="mailto:mousaevents@gmail.com">mousaevent@gmail.com</a> or call us at <a href="tel:9045251648">904.525.1648</a>. We look forward to hearing from you!</p>
            </div>
            {/* <div className="inquiryForm"> */}
            <form className="inquiryForm" onSubmit={handleSubmit}>
                <label> Full Name
                    <input
                        className="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        required
                    />
                </label>
                <label> Email Address
                    <input
                        className="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                    />
                </label>
                <label> Phone Number
                    <input
                        className="phoneNumber"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="123-456-7890"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                    />
                </label>
                <label>
                    Event Date
                    <input
                        className="eventDate"
                        type="date"
                        name="eventDate"
                        min={currentDate}
                        value={formData.eventDate}
                        onChange={handleChange}
                    />
                </label>
                <label> Message
                    <textarea
                        className="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event and the services you require."
                        required
                    />
                </label>
                <div className="submitButtonDiv">
                    <button className="submitForm" type="submit">Submit</button>
                </div>
            </form>
            <ToastContainer />
            {/* </div> */}
        </div>

    );
}

export default Contact;
