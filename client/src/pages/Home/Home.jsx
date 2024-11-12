import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Footer from '../../components/FooterTemp/FooterTemp'

const Home = () => {

    return (
        <div>
            {/* --- Section 1: Header --- */}
            <div id="hero-container">
                <Image src="holder.js/100px250" fluid />
                <div>
                    <h1>Check and see if you qualify for a free first exam today!</h1>
                    <Button variant="outline-dark" href="/Quiz">FIND FREE FIRST EXAM</Button>
                </div>
                {/* --- Page Break --- */}
            </div>
            {/* --- Section 2: Content --- */}
            <div id="s2-container">
                <div>
                    <h1>Healthy pets start<br />
                        with empowered vets</h1>
                    <p>When veterinarians receive ownership and<br />
                        autonomy, your pets end up with the best<br />
                        possible care (and the best possible treats).</p>
                    <Button variant="outline-dark" href="/Hospitals">FIND A HOSPITAL NEAR YOU</Button>
                </div>
                <Image src="holder.js/100px250" fluid />
                {/* --- Page Break --- */}
            </div>

            <div id='placeholder-video'>
                {/* --- Section 3: Video --- */}
                <h1>Video goes here!</h1>
                {/* --- Page Break --- */}
            </div>

            <div id='bicm-container'>
                {/* --- Section 4: Content --- */}
                <div>
                    <h1>Best-in-class medicine.</h1>

                    <div>
                        <h6>Easy Online Booking</h6>
                        <Button variant="outline-dark" href="/Hospitals">BOOK A VISIT &#8594;</Button>
                    </div>

                    <div>
                        <h6>Conventient Locations</h6>
                        <Button variant="outline-dark" href="/Hospitals">FIND A HOSPITAL &#8594;</Button>
                    </div>

                    <div>
                        <h6>Primary & Urgent Care</h6>
                        <Button variant="outline-dark" href="/Hospitals">DISCOVER OUR SERVICES &#8594;</Button>
                    </div>

                    <div>
                        <h6>Virtual Care</h6>
                        <Button variant="outline-dark" href="/Hospitals">BOOK VIRTUAL CARE &#8594;</Button>
                    </div>

                    <div>
                        <h6>Affordable Wellness Plans</h6>
                        <Button variant="outline-dark" href="/Hospitals">BECOME A MEMBER &#8594;</Button>
                    </div>

                </div>
                {/* --- Page Break --- */}
            </div>

            <div id='placeholder-slideshow'>
                {/* --- Section 3: Video --- */}
                <h1>Slideshow goes here!</h1>
                {/* --- Page Break --- */}
            </div>

            <div id='placeholder-slideshow'>
                {/* --- Section 4: Video --- */}
                <h1>Slideshow part 2 goes here!</h1>
                {/* --- Page Break --- */}
            </div>

           

        </div>
    )
};

export default Home;