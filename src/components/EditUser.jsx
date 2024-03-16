import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextField from "./TextField";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../features/users/userSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const params = useParams();
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
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
          <Button onClick={handleEditUser}>Edit</Button>
          <Link to={"/"}>
            <Button>Cancle</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditUser;
