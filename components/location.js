import React from 'react';

const Location = () => {
    const [mapLink, setMapLink] = React.useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52922921.49958086!2d-161.86807403431987!3d35.94308550326223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1728303210639!5m2!1sen!2sng")
    const [location, setLocation] = React.useState("United State");
    return (
    <div className="location_container">
    <div className="iframe_container">
      <iframe src={mapLink} className="Google_map"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <ul className="countries">
        <li className={location === "United State" ? "country active" : "country"} onClick={() => {
            setLocation("United State")
            setMapLink("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52922921.49958086!2d-161.86807403431987!3d35.94308550326223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1728303210639!5m2!1sen!2sng")
        }}>United State</li>
        <li className={location === "Canada" ? "country active" : "country"} onClick={() => {
            setLocation("Canada")
            setMapLink("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43034695.91476162!2d-135.68049849604526!3d48.8271323196075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sng!4v1728312822163!5m2!1sen!2sng")
        }}>Canada</li>
        <li className={location === "United Kingdom" ? "country active" : "country"} onClick={() => {
            setLocation("United Kingdom")
            setMapLink("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21683823.37127866!2d-41.141820603789434!3d48.43827838174786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sng!4v1728313094092!5m2!1sen!2sng")
        }}>United Kingdom</li>
        <li className={location === "Germany" ? "country active" : "country"} onClick={() => {
            setLocation("Germany")
            setMapLink("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135220.483754183!2d5.171802795430146!3d51.0635772243534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sng!4v1728313245775!5m2!1sen!2sng")
        }}>Germany</li>
        <li className={location === "Australia" ? "country active" : "country"}  onClick={() => {
            setLocation("Australia")
            setMapLink("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61939664.1276666!2d87.0224236297329!3d-18.6416771986883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sng!4v1728313422507!5m2!1sen!2sng")
        }}>Australia</li>
        <li className={location === "South Africa" ? "country active" : "country"} onClick={() => {
            setLocation("South Africa")
            setMapLink("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27505229.822344545!2d5.823669688464467!3d-32.69742506887795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sng!4v1728313509931!5m2!1sen!2sng")
        }}>South Africa</li>
    </ul>
    </div>
  )
}

export default Location
