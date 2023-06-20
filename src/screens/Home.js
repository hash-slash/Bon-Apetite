import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="card mt = 3" style={{"width": "18rem", "maxHeight": "360px"}}>
                    <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is imp text</p>
                            <div className="container w= 100">
                                <select className="m=2 h=100 w=100 bg-success">
                                    <option className=""></option>
                                </select>
                            </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}