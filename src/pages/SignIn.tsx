import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/InputForm";

interface FormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const { login } = useUser();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    if (!success) {
      setError("Invalid email or password");
    } else {
      setError("");
      navigate("/account");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-93.75 h-203 bg-[#F7F8F9] flex flex-col px-5">
        <div className=" relative top-10">
          <div className="mb-6">
            <h1 className="signinhead w-47 h-17.25 text-[28px] font-medium">
              Signin to your PopX account
            </h1>
            <p className="text-[18px] text-[#1D2226] opacity-60 mt-3.5 w-58 h-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          <form className="flex flex-col gap-5.75" onSubmit={handleSubmit}>
            <FormInput
              text="Email Address"
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <FormInput
              text="Password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className={`w-full h-11.5 text-[16px] py-3 rounded-md font-medium ${
                formData.email && formData.password
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-white cursor-not-allowed"
              }`}
              disabled={!formData.email || !formData.password}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
