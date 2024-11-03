import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import loginImage from "../assets/LoginImage.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn, login } = useAuth();

  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isPasswordValid = password.length >= 6;

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isEmailValid || !isPasswordValid) {
      toast.error("Please enter a valid email and password.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://backend-lifevault.vercel.app/api/auth/login/email",
        { email, password }
      );
      login(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", email);
      toast.success("Login successful");
    } catch (error) {
      const backendError =
        error.response?.data?.error || "An unexpected error occurred";
      window.alert(backendError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHiveKeychainLogin = () => {
    const hiveUsername = prompt("Please enter your Hive username");

    if (hiveUsername) {
      setIsLoading(true);
      window.hive_keychain.requestHandshake(() => {
        window.hive_keychain.requestSignBuffer(
          hiveUsername,
          "Login to LifeVault",
          "Posting",
          (response) => {
            if (response.success) {
              const token = response.result.token;
              login(token);

              localStorage.setItem("token", token);
              localStorage.setItem("hiveUsername", hiveUsername);

              toast.success("Hive Keychain login successful");
            } else {
              toast.error(response.error || "Hive Keychain login failed");
            }
            setIsLoading(false);
          }
        );
      });
    } else {
      toast.error("Hive username is required for Hive Keychain login");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105">
        {/* Image section */}
        <div className="hidden md:block">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-green-600 mb-4 animate-fadeInDown">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mb-8 animate-fadeInDown">
            Log in to continue to your account
          </p>

          {/* Email/Password Form */}
          <form className="space-y-4" onSubmit={handleSignIn}>
            <div className="animate-slideInLeft">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 rounded-md bg-green-100 text-green-800 focus:ring focus:ring-green-400"
                required
              />
              {!isEmailValid && email.length > 0 && (
                <p className="text-xs text-red-500 mt-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="animate-slideInRight">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-green-600"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 rounded-md bg-green-100 text-green-800 focus:ring focus:ring-green-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-green-600"
                >
                  👁️
                </button>
              </div>
              {!isPasswordValid && password.length > 0 && (
                <p className="text-xs text-red-500 mt-1">
                  Password must be at least 6 characters long.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !isEmailValid || !isPasswordValid}
              className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white rounded-md font-bold transform transition duration-300 hover:scale-105"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Hive Keychain Login */}
          <div className="mt-6 text-center">
            <button
              onClick={handleHiveKeychainLogin}
              disabled={isLoading}
              className="w-full py-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white rounded-md font-bold transform transition duration-300 hover:scale-105"
            >
              {isLoading ? "Signing In..." : "Sign In with Hive Keychain"}
            </button>
          </div>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-500 hover:underline">
              Sign Up
            </a>
          </p>
          <p className="text-center text-sm">
            Don’t have a Hive Account?{" "}
            <a
              href="https://ecency.com/signup?referral=vastavikadi"
              className="text-green-500 hover:underline"
            >
              Sign Up
            </a>
          </p>
          <div className="mt-4 w-full py-2 flex justify-center bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 text-white rounded-md font-bold transform transition duration-300">
            Recommended: Login with Email
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
