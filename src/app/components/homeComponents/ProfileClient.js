import axios from "axios";
import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../Styles/Profile.css";

const ProfileClient = () => {
  let [profileDetails, setProfileDetails] = React.useState({});
  React.useEffect(() => {
    var userid = JSON.parse(localStorage.getItem("user")).userid;

    axios
      .get("http://localhost:4000/profile/userinfo/" + userid)
      .then((res) => {
        setProfileDetails(res.data);
      });
  }, [setProfileDetails]);
  return (
    <div>
      <p>Here displays the profile of Client</p>
      <div className="container">
        <div className="profile_pic">pictture stays here</div>
        <div className="Details">
          <div className="row">
            <div className="col-md-3">{console.log(profileDetails)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileClient;
