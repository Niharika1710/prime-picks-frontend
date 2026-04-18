const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';



type AuthTab = 'login' | 'signup';

export function AuthPage() {
  const [activeTab, setActiveTab] = useState<AuthTab>('login');
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Login clicked");

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    const data = await response.json();

    console.log("Data:", data);

    // ✅ store user properly
    localStorage.setItem("user", JSON.stringify({
      name: data.name,
      email: data.email
    }));

    setMessage("Login successful!");

    // ✅ redirect
    window.location.href = "/";
    
  } catch (error) {
    console.error("ERROR:", error);
    setMessage("Login failed");
  }
};

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Signup clicked"); // 👈 DEBUG

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    console.log("Response:", response); // 👈 DEBUG

    const data = await response.text();
    console.log("Data:", data); // 👈 DEBUG

    setMessage(data);
    if (data.toLowerCase().includes("success")) {
  localStorage.setItem("user", JSON.stringify({
    name: formData.name,
    email: formData.email
  }));
}

  } catch (error) {
    console.error("ERROR:", error);
    setMessage("Signup failed");
  }
};

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #8b6f47 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Auth Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-card border border-border shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="pt-12 px-8 pb-8 text-center border-b border-border bg-secondary/20">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-serif text-foreground mb-3 tracking-tight"
            >
              Welcome to
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-serif text-primary mb-4 tracking-tight"
            >
              Prime Picks
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-muted-foreground tracking-wide"
            >
              Your gateway to timeless elegance
            </motion.p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border bg-secondary/10">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 text-sm tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === 'login'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Login
              {activeTab === 'login' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-4 text-sm tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === 'signup'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign Up
              {activeTab === 'signup' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>

          {/* Forms */}
          <div className="p-8">
            {message && (
                    <div className="mb-4 text-center text-sm text-primary">
                        {message}
                    </div>
            )}
            <AnimatePresence mode="wait">
              {activeTab === 'login' ? (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleLogin}
                  className="space-y-6"
                >
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="login-email"
                      className="block text-sm text-foreground tracking-wide"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="login-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="login-password"
                      className="block text-sm text-foreground tracking-wide"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="login-password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <a
                      href="#"
                      className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 tracking-wide"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 hover:bg-primary/90 transition-colors duration-300 tracking-widest uppercase"
                  >
                    Login
                  </motion.button>
                </motion.form>
              ) : (
                <motion.form
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSignup}
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="signup-name"
                      className="block text-sm text-foreground tracking-wide"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="signup-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="signup-email"
                      className="block text-sm text-foreground tracking-wide"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="signup-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="signup-password"
                      className="block text-sm text-foreground tracking-wide"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="signup-password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-input-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="text-sm text-muted-foreground text-center leading-relaxed">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      Privacy Policy
                    </a>
                  </div>

                  {/* Signup Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 hover:bg-primary/90 transition-colors duration-300 tracking-widest uppercase"
                  >
                    Create Account
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-secondary/20 border-t border-border">
            <p className="text-sm text-center text-muted-foreground">
              {activeTab === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setActiveTab('signup')}
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setActiveTab('login')}
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Secured with industry-standard encryption
        </motion.p>
      </motion.div>
    </div>
  );
}
