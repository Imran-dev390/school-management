import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaFlickr,
  FaWordpress,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaSkype,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
          <p className="text-sm mb-4">
            Weblizar is a leading IT company based in India, dedicated to delivering
            high-quality digital solutions. We specialize in web design & development,
            e-commerce applications, SEO, PPC advertising, and more.
          </p>
          <div className="flex gap-3 text-lg">
            <a href="https://profiles.wordpress.org/weblizar"><FaWordpress /></a>
            <a href="https://www.facebook.com/Weblizarwp/"><FaFacebookF /></a>
            <a href="https://www.youtube.com/channel/UCFve0DTmWU4OTHXAtUOpQ7Q/featured"><FaYoutube /></a>
            <a href="https://twitter.com/weblizar"><FaTwitter /></a>
            <a href="https://www.instagram.com/weblizar/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/hari-shankar-maliya-402336353/"><FaLinkedin /></a>
            <a href="http://www.pinterest.com/lizarweb/"><FaPinterest /></a>
            <a href="https://www.flickr.com/people/121500546@N06/"><FaFlickr /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "https://weblizar.com/"],
              ["Blog", "https://weblizar.com/blog"],
              ["Contact", "https://weblizar.com/contact"],
              ["Terms Of Services", "https://weblizar.com/terms-services/"],
              ["WordPress Themes", "https://weblizar.com/themes"],
              ["Plugins", "https://weblizar.com/plugins"],
              ["Book Demo", "https://weblizar.com/book-a-demo"],
              ["Custom Service", "https://weblizar.com/custom-service"],
            ].map(([name, link]) => (
              <li key={name}>
                <a href={link} className="hover:text-blue-400">{name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">CUSTOMER SUPPORT</h3>
          <div className="text-sm space-y-3">
            <div className="flex items-start gap-2"><FaEnvelope className="mt-1" /> <a href="mailto:support@weblizar.com">support@weblizar.com</a></div>
            <div className="flex items-start gap-2"><FaPhone className="mt-1" /> <a href="tel:+91-02269711620">+91-02269711620</a></div>
            <div className="flex items-start gap-2"><FaWhatsapp className="mt-1" /> 
              <div>
                <a href="tel:+91-7878277480">+91-7878277480</a>,&nbsp;
                <a href="tel:+91-8209257279">+91-8209257279</a>
              </div>
            </div>
            <div className="flex items-start gap-2"><FaSkype className="mt-1" /> weblizar</div>
            <h3 className="text-xl font-bold mt-5">CONTACT US</h3>
            <div className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> 
              <a href="https://maps.app.goo.gl/U7igTPVdqzTJCEeM6">
                5, Krishna Nagar, Rang Bari Main Road, Kota Rajasthan 324005 INDIA
              </a>
            </div>
            <div className="flex items-start gap-2"><FaMobileAlt className="mt-1" /> <a href="tel:+91-9950348952">+91-9950348952</a></div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <span>
            Made In Pakistan | &copy; {new Date().getFullYear()} | <a href="/terms-services/" className="hover:text-blue-400">Terms Of Services</a> | A Product of <a href="https://intechnosoftware.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Intechno Software Pvt. Ltd.</a>
          </span>
          <div className="flex gap-3 mt-4 md:mt-0">
            <img src="https://weblizar.com/wp-content/uploads/2025/04/pay-pal-new.png" alt="Paypal" className="h-8" />
            <img src="https://weblizar.com/wp-content/uploads/2025/04/stripe-new.png" alt="Stripe" className="h-8" />
            <img src="https://weblizar.com/wp-content/uploads/2025/04/Razorpay-Logo-new.png" alt="Razorpay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
