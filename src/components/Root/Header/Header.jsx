import React from 'react';
import { Link } from 'react-router';
const Header = () => {
    return (
        <div>
            <h1>this is header</h1>
            <nav>
                 <Link to= '/' > Home</Link>
                                      <Link to= '/mobile' > Mobiles</Link>

                 <Link to= '/laptop' > Laptop</Link>

                 <Link to= '/car' > Car</Link>
                 <Link to='/user'>User</Link>


            </nav>
        </div>
    );
};

export default Header;