import React from 'react';
import './assets/boot/bootstrap.css';
import './assets/boot/bootstrap.min.css';
import './assets/css/main.css';
function AuthLayout({children}) {
  return (
    <div id="auth">
        <div className="container">
            <div className="row">
            <div className="card-body">
                            {children}
                        </div>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout