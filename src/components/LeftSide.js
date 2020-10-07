import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftSide() {
  return (
    <div>
      <div class="col-sm-2">
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            fontWeight: 'bold',
          }}
        >
          mClinic
        </div>
        <div style={{ padding: '2px' }}>
          <div>
            <a href="/dashboard" style={{ textDecoration: 'none' }}>
              Dashboard
            </a>
          </div>
          <div>
            <a href="/dashboard" style={{ textDecoration: 'none' }}>
              Patient
            </a>
          </div>
          <div>
            <a href="/dashboard" style={{ textDecoration: 'none' }}>
              Calender
            </a>
          </div>
          <div>
            <Link to="/clinic/manage">Clinic</Link>
          </div>
          <div>
            <a href="/dashboard" style={{ textDecoration: 'none' }}>
              Messages
            </a>
          </div>
          <div>
            <a href="/dashboard" style={{ textDecoration: 'none' }}>
              My Account
            </a>
          </div>
          <div>
            <a href="/dashboard" style={{ textDecoration: 'none' }}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
