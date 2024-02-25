import { Link } from "react-router-dom"; // Assuming you are using React Router

const BackToHomeButton = () => {
  return (
    <Link
      to="/"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >
      Home
    </Link>
  );
};

export default BackToHomeButton;
