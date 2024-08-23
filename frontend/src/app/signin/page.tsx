'use client';
import Image from "next/image";
import signinPhoto from "../../image/make-a-logo-online.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/authentication/login', {
        email,
        password
      });

      const { token, role } = response.data;
      localStorage.setItem('token', token);

      

      if (response.status === 200 ) {
        console.log("Login successful");
        router.push(`/teacherdash`)
      
      } else {
        console.error("Authentication failed");
      }
    } catch (error:any) {
      
      setError(error.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center mt-14">
        <div className="login-page flex gap-4 overflow-hidden">
          <div>
            <Image src={signinPhoto} width={800} alt="Picture of the author" className="" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Ready to start your success story?</h2>
            <p className="text-gray-600 font-semibold mb-4">Please enter your email address and password to proceed</p>
            <form className="space-y-4">
              {error && <span className="error-message mt-8 flex items-center justify-center bg-[#EF665B] p-2 w-68 text-sm font-bold text-[#fff] rounded-lg">{error}</span>}
              <div>
                <label htmlFor="Email" className="block font-semibold text-gray-700">Email</label>
                <div className="flex border mt-4 p-2.5 rounded-lg">
                  <FontAwesomeIcon icon={faAt} className="w-4 ml-1.5 text-[#171a29]" />
                  <input
                    id="Email"
                    className="w-full ml-2 outline-none"
                    placeholder="Enter your email address"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
                <div className="flex border mt-4 p-2.5 rounded-lg">
                  <FontAwesomeIcon icon={faLock} className="w-4 ml-1.5 text-[#171a29]" />
                  <input
                    id="password"
                    className="w-full ml-2 outline-none"
                    placeholder="Enter Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </form>
            <button
              className="w-full px-6 py-3 mt-3 bg-primary text-white rounded-lg  hover:text-primary border-2 border-[#f79d27] transition-colors duration-300"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className="signup-sugg">
              <h5 className="mt-3 flex items-center justify-center">Don't have an account? <Link href='/signup' className="text-[#f79d27] ml-3 font-bold">Sign up</Link> </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
