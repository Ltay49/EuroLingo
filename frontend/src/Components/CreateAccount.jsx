import { useState } from "react";
import { checkIfUserExists, createUser, findUser } from "../api";

const CreateAccount = ({ setShowLogIn }) => {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [submissionFeedback, setSubmissionFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await checkIfUserExists(createUsername);
      console.log(user)
      if (createUsername === user) {
        setSubmissionFeedback("Username already taken, please chooose another");
        setCreateUsername("");
        setCreatePassword("");
      } else {
        const data = await createUser(createUsername, createPassword);
        console.log("before createUser API call");
        console.log(data);
        setSubmissionFeedback("Account created successfully");
        setCreateUsername("");
        setCreatePassword("");
        setTimeout(() => {
          setShowLogIn(true);
        }, 2000);
      }
    } catch (err) {
      console.log("error", error.message);
      setSubmissionFeedback(error.message);
    }
  };

  return (
    <div>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create Username"
          value={createUsername}
          onChange={(e) => setCreateUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="submissionFeedback">
        <p>{submissionFeedback}</p>
      </div>
      <button onClick={() => setShowLogIn(true)}>Back to Log In</button>
    </div>
  );
};

export default CreateAccount;
