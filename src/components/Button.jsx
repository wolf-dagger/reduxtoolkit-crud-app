const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="border-t-indigo-600 text-white py-2 px-6 my-10 rounded hover: bg-indigo-800 shadow hover:shadow-xl transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
