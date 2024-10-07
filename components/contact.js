import React from 'react'

const Contact = () => {
  return (
    <section class="container mx-auto px-6 py-12" name="Contact" id="Contact"> 
    <div class="text-center"> 
        <h2 class="text-4xl font-bold text-gray-800">Contact Us</h2> 
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">Feel free to reach out to us with any questions or inquiries. We're here to help and ensure you have a great experience with ICare Errand Services.</p> 
        </div> 
        <div class="mt-10 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg"> 
            <form> 
                <div class="mb-6"> 
                    <label for="name" class="block text-gray-700 font-bold mb-2">Your Name</label> 
                    <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your name"/> 
                    </div> 
                    <div class="mb-6"> 
                        
                        <label for="email" class="block text-gray-700 font-bold mb-2">Email Address</label> 
                        <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email"/>
                         </div>
                          <div class="mb-6">
                             <label for="message" class="block text-gray-700 font-bold mb-2">Your Message</label> <textarea id="message" rows="5" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your message"></textarea> </div> <div class="text-center"> 
                                <button type="submit" class="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">Send Message</button> 
                                </div> 
                                </form> 
                                </div> 
                                <div class="mt-12 text-center"> <p class="text-gray-600">Or reach us directly:</p> <p class="font-semibold text-gray-800">Phone: +123 456 7890</p> <p class="font-semibold text-gray-800">Email: contact@icareerrandservices.com</p> </div>
     </section> 
  )
}

export default Contact;
