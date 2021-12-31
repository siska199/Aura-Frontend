import aboutBg from '../assets/about_bg.svg'
export default function About() {
    return (
        <div className="container container-about my-5">
            <div className="row text-center">
                    <h1 className="py-2 fw-bolder">About Us</h1>
                    <img className='my-2' width="350px" height="350px" src={aboutBg} alt=""/>
                    <p className="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odio doloremque atque facere obcaecati eius ex odit ut! Tempore enim eum inventore ex voluptate nihil deleniti minus commodi quisquam et!
                    </p>
            </div>
        </div>
    )
}
