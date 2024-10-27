import { useState } from 'react';
import React from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useRouter } from 'next/router';
import Nav from '../components/navmenu';

const Careers = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        state: '',
        city: '',
        address: '',
        ssn: '',
        hoursPerWeek: '',
        preferredDays: '',
        startDate: '',
        smoking: '',
        carDetails: '',
        about: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [idCardFront, setIdCardFront] = useState(null);
    const [idCardBack, setIdCardBack] = useState(null);
    const [cv, setCv] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === "idCardFront") {
            setIdCardFront(files[0]);
        } else if (name === "idCardBack") {
            setIdCardBack(files[0]);
        } else if (name === "cv") {
            setCv(files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Create a FormData object
        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('middleName', formData.middleName);
        data.append('lastName', formData.lastName);
        data.append('dob', formData.dob);
        data.append('state', formData.state);
        data.append('city', formData.city);
        data.append('address', formData.address);
        data.append('ssn', formData.ssn);
        data.append('idCardFront', idCardFront);
        data.append('idCardBack', idCardBack);
        data.append('cv', cv);
        data.append("hoursPerWeek", formData.hoursPerWeek);
        data.append("preferredDays", formData.preferredDays);
        data.append("startDate", formData.startDate);
        data.append("smoking", formData.smoking);
        data.append("carDetails", formData.carDetails);
        data.append("about", formData.about);

        try {
            await axios.post('https://og-server-2v6e.onrender.com/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setShowModal(true);
        } catch (error) {
            console.error('Error submitting application:', error);
        }finally {
            setIsLoading(false); // Stop loading animation
        }
    };

    const handleGoHome = () => {
        setShowModal(false);
        router.push("/"); // Redirect to home page
    };
  return (
    <div className='careers'>
  <div className='navBar bg-white fixed top-0 bigtablet:hidden z-50 h-screen' id='barContent'>
        <Nav/>
      </div>
    <div className=' overflow-y-scroll w-full overflow-x-hidden block '>
      <div className='fixed top-0 z-40'>
      <Header/>
      </div>
      </div>

<div className="main-form">
    <div className="form-container"> 
    <h2 className='font-poppins'>Fill in these details to complete job application</h2> 
    <form onSubmit={handleSubmit} className='career-form'> 
        <div className="form-group"> 
            <label htmlFor="firstName">First Name:</label> 
            <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
            </div> 
            
            <div className="form-group"> 
                <label  className='font-poppins' htmlFor="middleName">Middle Name:</label> 
                <input type="text" name="middleName" placeholder="Middle Name" onChange={handleInputChange} />
                </div> 
                
                <div className="form-group"> 
                    <label className='font-poppins' htmlFor="lastName">Last Name:</label> 
                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
                    </div> 
                    
                    <div className="form-group"> 
                    <label className='font-poppins' htmlFor="dob">Date of Birth:</label> 
                    <input type="date" name="dob" onChange={handleInputChange} required /> </div>
                    
                     <div className="form-group"> 
                    <label className='font-poppins' htmlFor="state">State:</label> 
                    <input type="text" name="state" placeholder="State" onChange={handleInputChange} required /> </div>
                    
                     <div className="form-group"> 
                    <label className='font-poppins' htmlFor="city">City:</label> 
                    <input type="text" name="city" placeholder="City" onChange={handleInputChange} required /></div>
                    
                     <div className="form-group"> 
                    <label className='font-poppins' htmlFor="address">Address:</label>
                    <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required /> </div> 
                     
                     <div className="form-group"> 
                        <label className='font-poppins'  htmlFor="ssn">SSN:</label> 
                        <input type="text" name="ssn" placeholder="SSN" onChange={handleInputChange} required />
                        </div> 
                        
                             <input type="text" name="hoursPerWeek" placeholder="How many hours per week?" onChange={handleInputChange} required />
            <textarea name="preferredDays" placeholder="Preferred days and hours to work" onChange={handleInputChange} required></textarea>
            <input type="date" name="startDate" placeholder="Date You Can Start" onChange={handleInputChange} required />
            
            <div>
                <label>Do you smoke?</label>
                <input type="radio" name="smoking" value="Yes" onChange={handleInputChange} required /> Yes
                <input type="radio" name="smoking" value="No" onChange={handleInputChange} required /> No
            </div>

            <textarea name="carDetails" placeholder="Car details (Year, make, model, VIN)" onChange={handleInputChange} required></textarea>
            <textarea name="about" placeholder="Tell me about you" onChange={handleInputChange} required></textarea>

                        <div className="form-group"> 
                        <label className='font-poppins' htmlFor="idCardFront">ID Card Front:</label> 
                        <input type="file" name="idCardFront" accept="image/*" onChange={handleFileChange} required />
                        </div> 
                        
                        <div className="form-group"> 
                        <label className='font-poppins' htmlFor="idCardBack">ID Card Back:</label>
                        <input type="file" name="idCardBack" accept="image/*" onChange={handleFileChange} required /></div> 
                         
                         <div className="form-group"> 
                        <label className='font-poppins' htmlFor="cv">CV: Only accepts pdf</label> 
                        <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                        </div> 
                        
                    <button type="submit" className='font-poppins career-button'>Submit Application</button> </form> </div>
   </div>
   
   {isLoading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}

       {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Application Submitted!</h2>
                        <p>Your job application has been successfully submitted.</p>
                        <button onClick={handleGoHome}>Go to Home</button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Careers;
