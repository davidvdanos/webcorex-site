import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Technology Solutions for the Modern Business
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                WebCoreX delivers cutting-edge software solutions to help your business 
                innovate, transform, and succeed in the digital economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn btn-accent">
                  Get Started
                </a>
                <a href="#services" className="btn bg-white text-primary hover:bg-gray-100">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom websites and web applications built with the latest technologies to enhance your online presence.
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
                <p className="text-gray-600 mb-4">
                  Intuitive mobile applications for iOS and Android that connect with your customers on-the-go.
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Secure, scalable cloud infrastructure and migration services to optimize your operations.
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              {/* Service Card 4 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">DevOps Services</h3>
                <p className="text-gray-600 mb-4">
                  Streamline your development processes with automated testing, continuous integration, and deployment.
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              {/* Service Card 5 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">IT Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic technology consulting to help you make informed decisions for your business's future.
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              {/* Service Card 6 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end digital transformation services to revolutionize your business processes and customer experiences.
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About WebCoreX</h2>
                <p className="text-lg text-gray-600 mb-6">
                  WebCoreX is a leading technology company specializing in enterprise-grade software solutions. With a focus on innovation and quality, we help businesses transform their operations and embrace the digital future.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of experienced developers, designers, and consultants work together to deliver custom solutions that address your unique business challenges. From concept to deployment, we are committed to exceeding your expectations.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">150+</p>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">50+</p>
                    <p className="text-gray-600">Satisfied Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">15+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">25+</p>
                    <p className="text-gray-600">Expert Team Members</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-xl -rotate-6"></div>
                  <div className="relative rounded-lg overflow-hidden h-96 w-full">
                    <img 
                      src="/images/about-image.svg" 
                      alt="WebCoreX Premium Solutions" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure the success of your project from start to finish.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">1</div>
                  <h3 className="text-xl font-bold mb-3">Discovery</h3>
                  <p className="text-gray-600">
                    We gather requirements and understand your business goals to create a detailed project plan.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">2</div>
                  <h3 className="text-xl font-bold mb-3">Design</h3>
                  <p className="text-gray-600">
                    Our team creates wireframes and prototypes to visualize the solution before development begins.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">3</div>
                  <h3 className="text-xl font-bold mb-3">Development</h3>
                  <p className="text-gray-600">
                    We build your solution using agile methodologies, with regular updates and feedback sessions.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              
              {/* Step 4 */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">4</div>
                  <h3 className="text-xl font-bold mb-3">Delivery</h3>
                  <p className="text-gray-600">
                    We deploy your solution, provide training, and offer ongoing support to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="bg-primary text-white py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-lg mb-0">
                  Partner with WebCoreX and take your business to the next level with our cutting-edge technology solutions.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="#contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have a project in mind or want to learn more about our services? Get in touch with our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                        placeholder="Your Email" 
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                      placeholder="Subject" 
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Address</h4>
                        <p className="text-gray-600">71-75 Shelton Street<br />London, WC2H9JQ</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Phone</h4>
                        <p className="text-gray-600">+30 6945441201</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Business Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 