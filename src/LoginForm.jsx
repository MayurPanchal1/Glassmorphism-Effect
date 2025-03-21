import React from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './LoginForm.css';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <IonIcon icon={mailOutline} />
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <IonIcon icon={lockClosedOutline} />
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <label>
                <a href="#forgot">Forgot password?</a>
              </label>
            </div>
            <button type="submit">Log in</button>
            <div className="register">
              <p>Don't have an account? <a href="#register">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;