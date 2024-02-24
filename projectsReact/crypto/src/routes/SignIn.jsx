import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, UserAuth } from '../context/AuthContext';

const SignIn = () => {
  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <div>
              <input type="email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
