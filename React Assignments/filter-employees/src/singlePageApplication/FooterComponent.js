import React from 'react'

export default function FooterComponent() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col'>
                    <h3 className='display-6 text-center'>Follow Us</h3>
                    <p className='display-6 text-center'>
                        <i class="fa fa-twitter"></i>{"  "}
                        <i class="fa fa-github"></i>{"  "}
                        <i class="fa fa-youtube"></i>{"  "}
                        <i class="fa fa-linkedin"></i> {"  "} 
                        <i class="fa fa-instagram"></i>{"  "}
                    </p>
                    <p className='h5 text-center'>
                    Copyright{" "}
                        <i class="fa fa-copyright"></i>{"  "}
                        2022 by @AjayMourya
                    </p>
                </div>
            </div>
        </div>
    )
}
