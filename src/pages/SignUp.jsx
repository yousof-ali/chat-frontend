import React, { useState } from "react";
import Container from "../components/shared/Container";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Logo from "../components/Logo";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import RadioGroup from "../components/ui/RadioGroup";
import { useAuthStore } from "../store/useAuthStore";
import singUpImage from "../assets/auth/sign-up.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const fData = { fullName: "", email: "", password: "", gender: "" };
  const [data, setData] = useState(fData);
  const [showPass, setShowPass] = useState(false);
  const { isSigninUp, signUpUser } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser(data);
  };
  return (
    <Container className={" flex justify-center items-center h-full"}>
      <div className="flex w-full gap-6">
        <div className="flex-1">
          <div className="max-w-[400px]  w-full mx-auto">
            <div className="mb-8">
              <Logo />
              <h4 className="text-base  ">Create an Account</h4>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" action="">
              <Input
                label={"Full Name"}
                required
                placeholder="Enter Your Full Name"
                name={"fullName"}
                value={data.fullName}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, fullName: e.target.value }))
                }
              />
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
              <RadioGroup
                value={data.gender}
                name={"gender"}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                onChange={(value) =>
                  setData((prev) => ({ ...prev, gender: value }))
                }
              />
              <Button
                loading={isSigninUp}
                disabled={isSigninUp}
                type={"submit"}
                variant="secondary"
                className={"w-full"}
              >
                Sign Up
              </Button>
            </form>
            <div className="mt-4">
              <span className="text-sm font-normal">
                Already have an Account?{" "}
              </span>
              <Link to={"/login"} className="underline px-2 ">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1  hidden lg:flex">
          <img
            src={singUpImage}
            className=" aspect-square max-w-[500px] mx-auto w-full"
            alt="sign-up"
          />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
