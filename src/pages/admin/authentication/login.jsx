import { useState } from 'react';
import InputField from "../../../components/controls/InputField";
import SubmitButton from '../../../components/controls/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../../services/auth/auth.service';
import { useDispatch } from 'react-redux';
import { setAdmin } from '../../../store/auth/adminSlice';
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import {  FiLock } from 'react-icons/fi';
import { FaRegEye, FaRegEyeSlash, FaRegEnvelope } from 'react-icons/fa6';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const signin = () => {
        setLoading(true);
        authService.login(form)
            .then((result) => {
                if (result && result.data.success) {
                    const info = result.data.user;
                    const token = result.data.token;
                    localStorage.setItem("adminToken", token);
                    localStorage.setItem("user", JSON.stringify(info));
                    dispatch(setAdmin(info));
                    toast.success(result.data.message);
                    navigate("/dashboard");
                } else {
                    toast.error(result.data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("Login failed. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="">
            <div className="bg-white">
                <div className="header py-4 text-center">
                    <p className="text-xl uppercase text-dark font-bold text-center py-3">Login</p>
                    
                </div>
                <div className="login-form px-3 md:p-8 flex flex-col space-y-6">
                    <div className=''>
                        <InputField
                            type="text"
                            name="email"
                            label="Email Address"
                            placeholder="Email Address"
                            onChange={(e) => {
                                setForm({ ...form, email: e.target.value });
                            }}
                            value={form?.email}
                            leftIcon={<FaRegEnvelope size={20} />}
                        />
                    </div>
                    <div className=''>
                        <InputField
                            type={passwordVisible ? "text" : "password"}
                            value={form?.password}
                            name="password"
                            label="Password"
                            placeholder="Password"
                            onChange={(e) => {
                                setForm({ ...form, password: e.target.value });
                            }}
                            leftIcon={<FiLock size={20} />}
                            rightIcon={
                                passwordVisible ? (
                                    <FaRegEyeSlash size={20}  onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaRegEye size={20}  onClick={togglePasswordVisibility} />
                                )
                            }
                        />
                    </div>
                    <div>
                        <SubmitButton onClick={!loading ? signin : null}>
                            {loading ? (
                                <ClipLoader
                                    color="#fff"
                                    size={30}
                                    data-testid="loader"
                                />
                            ) : (
                                "Login"
                            )}
                        </SubmitButton>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to="/forget-password">
                        <p className='text-md text-primary font-semibold'>Forget Password</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
