import React, { useState } from "react";
import Modal from "react-modal";
export default function ClinicStaff() {
  Modal.setAppElement("#root");
  const [modalstate, setModalstate] = useState(false);
  return (
    <>
      <div style={{ marginLeft: "10px" }}>
        <div
          class="card"
          style={{
            width: "600px",
            marginTop: "15px ",
            marginBottom: "15px",
          }}
        >
          <div class="card-body">
            <h5 class="card-title" style={{ borderBottom: "solid 2px blue" }}>
              Clinics Staff
            </h5>
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Search Staff"
                />
              </div>
            </form>
            <div>
              <button
                class="btn btn-primary "
                onClick={() => setModalstate(true)}
              >
                {" "}
                Add New Staff{" "}
              </button>
              <Modal
                isOpen={modalstate}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalstate(false)}
                style={{
                  overlay: {
                    backgroundColor: "gray",
                  },
                  content: {
                    backgroundColor: "white",
                  },
                }}
              >
                <h2 style={{ borderBottom: "solid 4px Blue" }}>
                  {" "}
                  Add New Staff
                </h2>
                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleInputname"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Email</label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      This email is used to login to mClinic.com.Please mention
                      a working email address since user have to verify thhis
                      email address.
                    </small>
                  </div>

                  <label class="form-check-label" for="exampleCheck1">
                    Mobile No
                  </label>
                  <div class="row">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                    <div class="col">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <label class="form-check-label" for="exampleCheck1">
                    Role
                  </label>
                  <div class="d-flex">
                    <div>
                      <div class="form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input form-check-inline"
                          id="exampleCheck1"
                        />
                        <label
                          class="form-check-label"
                          for="exampleCheck1"
                          style={{ marginLeft: "2px" }}
                        >
                          Patient Management
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input form-check-inline"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          patient Payment
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input form-check-inline"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Dashboard
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input form-check-inline"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Delete Patients
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input form-check-inline"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Inventory Management
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="form-check ">
                        <input
                          type="checkbox"
                          class="form-check-input form-check-inline"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Private Chat Management
                        </label>
                      </div>
                    </div>
                  </div>
                  <label class="form-check-label" for="exampleCheck1">
                    Clinics
                  </label>
                  <div>
                    <div class="form-check ">
                      <input
                        type="checkbox"
                        class="form-check-input form-check-inline"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Dr. Natalia J Anderson Clinic
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="form-check ">
                      <input
                        type="checkbox"
                        class="form-check-input form-check-inline"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Dr.henry E Cooper Clinic
                      </label>
                    </div>
                  </div>
                </form>
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ backgroundColor: "orange" }}
                  onClick={() => setModalstate(false)}
                >
                  Cancel
                </button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
