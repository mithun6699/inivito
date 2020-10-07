import React from 'react';
import { Link } from 'react-router-dom';

export default function ClinicSettings() {
  return (
    <div>
      <div class="">
        <div class="card ">
          <div class="card-body" style={{ padding: '5px' }}>
            <div>
              <h6 style={{ borderBottom: 'solid 2px blue' }}>
                Clinic Settings
              </h6>
              <div>
                <button
                  type="button"
                  class="btn btn-block "
                  style={{
                    // width: "150px",
                    backgroundColor: '#E3ECFD',
                    marginBottom: '5px',
                  }}
                >
                  Clinic Details
                </button>
                <Link
                  type="button"
                  to="/clinic/manage/staff"
                  class="btn btn-block"
                  style={{
                    // width: "150px",
                    backgroundColor: '#E3ECFD',
                    marginBottom: '5px',
                  }}
                >
                  Clinic Staff
                </Link>
                <button
                  type="button "
                  class="btn btn-block"
                  style={{
                    backgroundColor: '#E3ECFD',
                    marginBottom: '5px',
                  }}
                >
                  Calender
                </button>
                <button
                  type="button"
                  class="btn btn-block"
                  style={{
                    // width: "150px",
                    backgroundColor: '#E3ECFD',
                    marginBottom: '5px',
                  }}
                >
                  Drug Catalog
                </button>
                <button
                  type="button"
                  class="btn btn-block"
                  style={{
                    // width: "150px",
                    backgroundColor: '#E3ECFD',
                    marginBottom: '5px',
                  }}
                >
                  Product Catalog
                </button>
                <button
                  type="button"
                  class="btn btn-block "
                  style={{
                    // width: "150px",
                    backgroundColor: '#E3ECFD',
                    marginBottom: '5px',
                  }}
                >
                  Billing Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
