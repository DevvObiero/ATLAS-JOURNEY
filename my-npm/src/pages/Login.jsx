import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      // After login, go to admin post page
      window.location.href = "/admin";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#051A23] text-gray-200">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-[#E8C5A8] text-[#051A23] font-medium rounded-md hover:opacity-90 transition"
      >
        Login with Google
      </button>
    </section>
  );
}

export default Login;
