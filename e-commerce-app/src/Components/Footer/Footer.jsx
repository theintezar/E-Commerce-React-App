import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8 p-3">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-white">Tab28</h2>
                    <p className="mt-2">Your e-commerce store's mission statement or brief description.</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2">Links</h2>
                    <ul>
                        <li className="mb-1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mb-1">
                            <Link>Shop</Link>
                        </li>
                        <li className="mb-1">
                            <Link>About</Link>
                        </li>
                        <li className="mb-1">
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 789</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
                    <p>Subscribe to our newsletter for updates and promotions.</p>
                    <form className="mt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 py-4">
                <div className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Tab28
                </div>
            </div>
        </footer>
    );
}

export default Footer;
