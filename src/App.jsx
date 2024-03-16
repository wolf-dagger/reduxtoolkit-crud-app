import { Route, Routes } from "react-router-dom";
import UserList from "./features/users/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          CRUD APP with Redux Toolkit
        </h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
        {/* <UserList /> */}
      </div>
    </>
  );
};

export default App;
