import React from 'react';
import "./Profile.css"

const Profile = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center">About</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-1">
                        <p>
                            Hello everyone, I am Nishant srivastava. Currently, I am 4th year student 
                            of electrical branch at National Institute of Technology, Patna. My branch  
                            is electrical and I have good knowledge on it. In free time, I usually 
                            learn programming. I am interested react web developer, programmer(SDE), 
                            IOT. I also participate in competetive programming language competiton. 
                            At present I am a 2 <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/white-medium-star_2b50.png" 
                            width="15px" height="15px"/> at codechef. I had also appeared in the gate 2021 exam
                            and secured rank AIR 775.
                            
                        </p>
                    </div>
                    <div className="col-sm-6 col-sm-offset-1">
                        <p>
                            In my B.Tech program our group have done two IOT based projects.<br/>
                            1. Home Automation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Smart ittigation System <br/>
                            In Home Automation project our group develop a system in which we are able to
                            control electrical home appliance using Arduino and Nodemcu(used as Iot device) 
                            through internt. In smart irrigation system we develop our own web server to control 
                            soil moisture and irrigate land accordingly using soil moisture sensor.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
