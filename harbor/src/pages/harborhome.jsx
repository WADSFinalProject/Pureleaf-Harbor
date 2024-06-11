import "../styles/harborhome.css";
import React from "react";  
import SearchShipment from "../components/SearchShipment";
import CurrentShipping from "../components/CurrentShipment";
import RecentActivities from "../components/RecentActs";
import { Link } from "react-router-dom";

const harborhome = () => {
    return (
        <div className="mainHome">
            <SearchShipment />
            <section className="InnerSection">
                <div className="frameParent">
                    <CurrentShipping />
                    <div className="featuresParent">
                        <div className="features">Features</div>
                        <div className="rectangleParent2">
                            <Link to="/ongoingshipments" className="box1"></Link>
                            <Link to="/shippinghistory" className="box2"></Link>
                        </div>
                    </div>
                    <RecentActivities />
                </div>
            </section>
            <footer className="mobileHarbourHomeChild" />
        </div>
    )
  };
  
  export default harborhome;