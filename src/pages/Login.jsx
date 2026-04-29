import React, { useState } from "react";
import Container from "../components/shared/Container";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Logo from "../components/Logo";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import RadioGroup from "../components/ui/RadioGroup";
import { useAuthStore } from "../store/useAuthStore";
import loginImage from "../assets/auth/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const fData = { email: "", password: "",};
  const [data, setData] = useState(fData);
  const [showPass, setShowPass] = useState(false);
  const { isLoggingIng, loginUser } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(data);
  };
  return (
    <Container className={" flex justify-center items-center h-full"}>
      <div className="flex w-full items-center gap-6">
        <div className="flex-1">
          <div className="max-w-[400px] bg-foreground w-full mx-auto">
            <div className="mb-8">
              <Logo />
              <h4 className="text-base  ">Login</h4>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" action="">
              <Input
                label={"Email"}
                required
                placeholder="Enter Your Email"
                name={"email"}
                type="email"
                value={data.email}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <div className="relative">
                <Input
                  label={"Password"}
                  required
                  placeholder="Enter Your Password"
                  name={"password"}
                  type={showPass ? "text" : "password"}
                  className={"pr-14"}
                  value={data.password}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
                <div
                  className="cursor-pointer top-1/2 right-5 text-xl absolute"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </div>
            
              <Button
                loading={isLoggingIng}
                disabled={isLoggingIng}
                type={"submit"}
                variant="secondary"
                className={"w-full"}
              >
               Login
              </Button>
            </form>
            <div className="mt-4">
              <span className="text-sm font-normal">
                Don't have an Account?{" "}
              </span>
              <Link to={"/sign-up"} className="underline px-2 ">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1  hidden lg:flex">
          <img
            src={loginImage}
            className=" aspect-square max-w-[500px] mx-auto w-full"
            alt="sign-up"
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
