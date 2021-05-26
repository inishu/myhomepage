import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container container-contact">
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h2>Contact</h2>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-sm-center'>
                    <div className="col-sm-8 col-sm-auto">
                        <form >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Input Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Input Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" className="form-control" placeholder="Input Phone Number" />
                            </div>
                            <select className='form-control'>
                                <option> Choose Category </option>
                                <option> React </option>
                                <option> IOT </option>
                                <option> Web Development</option>
                                <option> Python3 </option>
                            </select>
                            <div className='form-group'>
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="10" placeholder="Input Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-danger">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact