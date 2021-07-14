import React from "react";
import {useLocation} from "react-router";
import SignUpForm from "@components/SignUpForm";
import Brand from "@components/Brand";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    const email = location.state?.email;

    return (
        <div className="container">
            <div className="col-12 col-lg-6 mx-auto">
                <div className="bg-light rounded-3 shadow-sm p-4">
                    <div className="d-flex justify-content-center mb-5">
                        <Brand light scale={1.5}/>
                    </div>
                    <h1 className="h3 m-2 my-4 fw-bold">Sign Up</h1>
                    <SignUpForm email={email}/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
