
import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {db} from '../firebase'
import {addDoc, collection} from 'firebase/firestore'

const UserAccount = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUserAccount = async (event) => {
    event.preventDefault(event)
   
    await addDoc(collection(db, 'useraccounts'), {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    })
     alert('User Account Created!')
  
  }


  return (
    <SigninContainer>
   
      <SigninBox>
          <Heading>Create Account</Heading>
          <FormContainer onSubmit={ createUserAccount }>
              <FormBox  >
                  <Input type="text" value={firstName} placeholder="First Name" required
                    onChange={(event) => {setFirstName(event.target.value)}}
                  />
                  <Input type="text" value={lastName} placeholder="Last Name" required 
                    onChange={(event) => {setLastName(event.target.value)}}
                  />
                  <Input type="text" value={email} placeholder="Email Address" required 
                    onChange={(event) => {setEmail(event.target.value)}}
                  />
                  <Input type="text" value={password} placeholder="Password" required 
                    onChange={(event) => {setPassword(event.target.value)}}
                  />
                  <span className='text-sm tracking-wide text-slate-500 no-underline my-2 font-semibold'>
                    Agree Terms of Use
                  </span>
                  <CreateAccountButton onClick="">CREATE ACCOUNT</CreateAccountButton>
                  <span className='text-sm tracking-wide text-slate-500 no-underline my-2 font-semibold'>
                    OR
                  </span>     
                  <SigninButton onClick="">SIGN IN</SigninButton>     
              </FormBox>
          </FormContainer>
      </SigninBox>
  </SigninContainer>
  )
}

export default UserAccount


const SigninContainer = tw.div`
    flex w-full h-full items-center justify-center 
`;
const SigninBox = tw.div`
    absolute top-16 w-11/12 sm:w-4/12 h-4/5 z-10  border-none
`;
const Heading = tw.h1`
    p-6 text-3xl font-bold text-black
`;
const FormContainer = tw.form``;

const FormBox = tw.div`
    flex flex-col items-center justify-center w-full 
`;

const Input = tw.input`
    w-80 sm:w-80 h-10 p-3 text-small text-black border-none bg-slate-100 rounded-3xl mb-4
`;


const CreateAccountButton = tw.button`
    flex justify-center items-center text-[12px] font-bold text-white rounded-3xl
    bg-[#3D69E1] h-10 w-80 sm:w-80 cursor-pointer my-4
`;
    
const SigninButton = tw(CreateAccountButton)`
  text-slate-600 bg-white border-2 border-black
`;


    