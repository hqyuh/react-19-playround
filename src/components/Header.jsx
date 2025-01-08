import { useNavigate } from "react-router-dom";

  const Header = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
      return navigate("/");
    }

  return (
    <header className='bg-blue-700 text-white p-3 mb-5'>
      <h1 className='text-2xl text-center font-bold uppercase cursor-pointer' onClick={handleRedirect}>
        React 19 Playground
      </h1>
    </header>
  );
};
export default Header;
