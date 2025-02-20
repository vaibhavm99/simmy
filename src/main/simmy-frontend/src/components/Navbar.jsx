import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/Simmy Logo.png'; // Adjust the path as needed
import { useSelector } from 'react-redux';


// const NavbarComponent = () => {
//    const user = useSelector((state) => state.user); // Access the global user data
//     return ( 
//         <div className="header-banner py-4"  id='header'>
//           <div className="navbar" >
//              <Navbar.Brand href="/">
//                 <img
//                    src={logo}
//                    className="d-inline-block align-top"
//                    alt="React Bootstrap logo"
//                    />
//              </Navbar.Brand>
//              <Nav className="justify-content-end" activeKey="/home" style={{ gap: '10px'}}>
//                {/* Add Dashboard button if user isn't null */}
//                {user && (
//                  <Nav.Item>
//                    <Nav.Link href="/options" style={{ paddingTop: '20px'}}>Dashboard</Nav.Link>
//                   </Nav.Item>
//                )}

//                 <Nav.Item>
//                    <Nav.Link href="/" style={{ paddingTop: '20px'}}>Home</Nav.Link>
//                 </Nav.Item>
//                 {user && (
//                  <Nav.Item>
//                    <Nav.Link href="/logout" style={{ paddingTop: '20px'}}>Logout</Nav.Link>
//                   </Nav.Item>
//                )}
//                {!user && (
//                 <><Nav.Item>
//                       <Nav.Link href='/login' eventKey="link-1" style={{ paddingTop: '20px' }}>Login</Nav.Link>
//                    </Nav.Item><Nav.Item className="btn btn-primary text-white rounded-pill btn-sm">
//                          <Nav.Link href='signup' className="btn btn-primary text-white" style={{ padding: '1% 1%', fontSize: "14px", borderRadius: '2px' }} href='/signup'>Signup</Nav.Link>
//                       </Nav.Item></>
//                )}
//              </Nav>
//           </div>
//        </div>
//      );
// }
 
// export default NavbarComponent;


const NavbarComponent = () => {
   const user = useSelector((state) => state.user); // Access the global user data
    return ( 
        <div className="header-banner" style={{ padding: '2vh 0' }} id='header'>
          <div className="navbar" style={{ width: '100vw' }}>
             <Navbar.Brand href="/">
                <img
                   src={logo}
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                   style={{ maxWidth: '20vw', height: 'auto' }}
                   />
             </Navbar.Brand>
             <Nav className="justify-content-end" activeKey="/home" style={{ gap: '2vw'}}>
               {/* Add Dashboard button if user isn't null */}
               {user && (
                 <Nav.Item>
                   <Nav.Link href="/options" style={{ paddingTop: '2vh'}}>Dashboard</Nav.Link>
                  </Nav.Item>
               )}

                <Nav.Item>
                   <Nav.Link href="/" style={{ paddingTop: '2vh'}}>Home</Nav.Link>
                </Nav.Item>
                {user && (
                 <Nav.Item>
                   <Nav.Link href="/logout" style={{ paddingTop: '2vh'}}>Logout</Nav.Link>
                  </Nav.Item>
               )}
               {!user && (
                <>
                   <Nav.Item>
                      <Nav.Link href='/login' eventKey="link-1" style={{ paddingTop: '2vh' }}>Login</Nav.Link>
                   </Nav.Item>
                   <Nav.Item className="btn btn-primary text-white rounded-pill btn-sm">
                      <Nav.Link href='/signup' className="btn btn-primary text-white" style={{ padding: '0.3vh 0.3vw', fontSize: "1.5vh", borderRadius: '0.1vw' }}>Signup</Nav.Link>
                   </Nav.Item>
                </>
               )}
             </Nav>
          </div>
       </div>
     );
}
 
export default NavbarComponent;
