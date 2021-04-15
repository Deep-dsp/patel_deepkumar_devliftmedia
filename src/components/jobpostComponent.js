import React from "react";

function jobpost() {
  return (
    <div className="col-md-4">
      <div className="box">
        <div className="box-body">
          <div className="box-first-block">
            <div className="title-circle d-flex align-items-center">
              <div className="circle"></div>
              <p>design</p>
            </div>
            <div className="jobpost-title">
              Marketing & Communications Manager(Internship/Co-founder)
            </div>
            <div className="jobpost-location d-flex align-items-center">
              <p>London, ON</p>
              <p>&#9679;</p>
              <p>Full-time</p>
            </div>
          </div>
          <div className="box-second-block d-flex align-items-center">
            <div className="job-thumb">
              <img src="https://dummyimage.com/50" />
            </div>
            <div className="company-name d-flex align-items-center">
              <p>founders,</p>
              <p>3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default jobpost;
