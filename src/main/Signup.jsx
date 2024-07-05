import React, { useState } from "react";
import Helmen from "./Helmen";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../Style/Login.css";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          toast.error(error.message);
          setLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });

          // Store user data in Firestore database
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          });

          setLoading(false);
          toast.success("Account created successfully!");
          navigate('/Login')
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <Helmen title="Signup">
      <section className="Login_Wrap">
        <Container>
          <Row>
              {loading ? (<Col lg='12' className="text-center"><h4 className="text-center">Loading......</h4></Col>) :( <Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold fs-4 my-2">Signup</h3>
              <Form className="auth_form" onSubmit={signup}>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 1.1 }}
                  className="clock_buy auth_btn mx-auto block my-1 bg-slate-100"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create an account"}
                </motion.button>
                <p className="text-slate-400 fs-7">
                  Already have an account? <Link to="/Login">Login</Link>
                </p>
              </Form>
            </Col>)}
          </Row>
        </Container>
      </section>
    </Helmen>
  );
};

export default Signup;
