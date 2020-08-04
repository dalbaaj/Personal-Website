import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Landing from "../components/pageSections/landing";
import About from "../components/pageSections/about";
import Education from "../components/pageSections/education";
import Experience from "../components/pageSections/experience";
import Skills from "../components/pageSections/skills";
import Accomplishments from "../components/pageSections/accomplishments";
import Volunteering from "../components/pageSections/volunteering";
import Contact from "../components/pageSections/contact";
// import PageSection from "../components/pageSection";

const IndexPage = () => (
  <>
  <SEO title="Home" />
  <Layout>
    <div className="flex">
      <div className="col-sm-12 col-md-12 col-lg-5" style={{maxHeight: '100vh', background: '#3A3A3A'}}>
        <Landing />
      </div>

      <div className="col-sm-12 col-md-12 col-lg-7" style={{background:'#2C2C2C'}}>
        <div className="page-section-list">
          <About/>
          <Education />
          <Experience />   
          <Skills />
          <Accomplishments />
          <Volunteering />
          <Contact />
        </div>
      </div>
    </div>
  </Layout>
  </>
)

export default IndexPage
