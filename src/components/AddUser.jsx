import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="mt-10 max-w-xl mx-auto ">
        <div className="flex flex-col gap-8">
          <TextField
            lable="Name"
            value={values.name}
            inputProps={{ type: "text", placeholder: "Prashsnt" }}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <TextField
            lable="Email"
            value={values.email}
            inputProps={{ type: "email", placeholder: "example@gmail.com" }}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={handleAddUser}>Submit</Button>
          <Link to={"/"}>
            <Button>Cancle</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddUser;
