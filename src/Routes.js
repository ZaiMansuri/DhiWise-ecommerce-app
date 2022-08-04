import React from "react";
import ProductDetailTwo from "pages/ProductDetailTwo";
import HomepageFour from "pages/HomepageFour";
import Casestudy from "pages/Casestudy";
import HomepageThree from "pages/HomepageThree";
import HomepageTwo from "pages/HomepageTwo";
import HomepageOne from "pages/HomepageOne";
import ProductDetailOne from "pages/ProductDetailOne";
import Homepage from "pages/Homepage";
import ProductDetail from "pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/productdetailone" element={<ProductDetailOne />} />
        <Route path="/homepageone" element={<HomepageOne />} />
        <Route path="/homepagetwo" element={<HomepageTwo />} />
        <Route path="/homepagethree" element={<HomepageThree />} />
        <Route path="/casestudy" element={<Casestudy />} />
        <Route path="/homepagefour" element={<HomepageFour />} />
        <Route path="/productdetailtwo" element={<ProductDetailTwo />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
