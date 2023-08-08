import Navbar from "../Components/Navbar";

function Layout() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" />
      </Router>
    </>
  );
}

export default Layout;

// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/log">Log In</Link>
//           </li>
//           <li>
//             <Link to="/sign">Sign In</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   );
// };

// export default Layout;
