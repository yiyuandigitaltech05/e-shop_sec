import React,{useState} from "react";
import Helmen from "./Helmen";
import {Container ,Row ,Col , Form, FormGroup} from "reactstrap"
import { Link ,useNavigate } from "react-router-dom";
import "../Style/Login.css"
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.config";
import { toast } from "react-toastify";




const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e)=>{
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      const user =userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('SuccessFully loggin in')
      navigate('/checkout')
    } catch (error) {
      setLoading(false);
      toast.error(error.message)
    }
  }

  return <Helmen title="Login">
    <section className="Login_Wrap">
      <Container>
        <Row>
         {loading ? (<Col lg='12'><h4 className="text-center">Loading...</h4></Col>) : 
         (<Col lg='6' className="m-auto text-center">
          <h3 className="fw-bold fs-4 my-2">Login</h3>
          

          <Form className="auth_form" onSubmit={signIn}>
            <FormGroup className="form_group">
              <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup className="form_group">
              <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </FormGroup>
            <motion.button type="submit" whileTap={{scale:1.1}} className="clock_buy auth_btn mx-auto block my-1 bg-slate-100">Login</motion.button>
            <p className="text-slate-400 fs-7">Don't have an account? <Link to="/signup">Create an account</Link></p>
          </Form>

          </Col>)}
        </Row>
      </Container>
    </section>
  </Helmen>;
};

export default Login;
