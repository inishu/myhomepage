import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <p>&copy; nishu 2021 | Built by <a href="https://github.com/inishu">Nishant Srivastava</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <a href="https://www.facebook.com/onlinenishantsrivastava/" >Facebook</a><a>&nbsp;&nbsp;</a>
                        <a href="https://instagram.com/_inishantsrivastava" >Instagram</a><a >&nbsp;&nbsp;</a>
                        <a href="https://twitter.com/_inishant" >Twitter</a><a>&nbsp;&nbsp;</a> 
                        <a href="mailto:codeofnishant@gmail.com" >Gmail</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer