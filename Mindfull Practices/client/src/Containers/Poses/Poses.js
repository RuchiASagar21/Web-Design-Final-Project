import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import "./Poses.scss";
import { useTheme } from "@mui/material";
import { TextField } from "@mui/material";
import { SemiBold } from "../../Assets/Fonts/Fonts.js";
import Loader from "../../components/Loader/Loader.js";
import { connect } from "react-redux";
import Theme from "../../Theme.js";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    isLoading: state?.Loader?.showLoader,
  };
};

function Poses(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://yoga-api-nzy4.onrender.com/v1/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {categories.slice(0,6).map((category) => (
        <div key={category.id}>
          <h2 style={{backgroundColor:"$primary-blue", padding:"40px"}}>{category.category_name}</h2>
          <p style={{padding: "5px"}}>{category.category_description}</p>
          <div style={{ display: "flex" }}>
            {category.poses.slice(0,6).map((pose) => (
              <div key={pose.id} className="pose-card">
                <img src={pose.url_png} alt={pose.english_name} className="image"/>
                <div className="pose-card-content" onClick={pose.english_name}>
                  <h3>{pose.english_name}</h3>
                  <p>Description: {pose.pose_description}</p><br></br>
                  <p>Benefits: {pose.pose_benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(Poses);