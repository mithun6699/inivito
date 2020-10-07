import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link, Route } from "react-router-dom";
import LeftSide from "./LeftSide";
import ClinicSettings from "./ClinicSettings";
import ClinicStaff from "./ClinicStaff";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2" style={{ backgroundColor: "white" }}>
            <LeftSide />
          </div>
          <Route
            path="/clinic/manage"
            render={() => (
              <div class="col-sm-3" style={{ backgroundColor: "white" }}>
                <ClinicSettings />
              </div>
            )}
          ></Route>
          <Route
            path="/clinic/manage/staff"
            exact
            render={() => (
              <div class="col-sm">
                <ClinicStaff />
                {/* <CourseList courses={courses} /> */}
              </div>
            )}
          ></Route>
        </div>
      </div>
    </>
  );
}

export default CoursesPage;
