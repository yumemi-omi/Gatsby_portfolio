import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>I'm Hiroki</h1>
    <Link to="/">Go back to home</Link>
  </Layout>
)



export default AboutPage;
