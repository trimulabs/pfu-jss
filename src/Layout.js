import React from 'react';
import fastDeepEqual from 'fast-deep-equal/es6/react';
import Helmet from 'react-helmet';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

const Layout = ({ route }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>
    <Header />
    <Placeholder name="jss-main" rendering={route} />
    <Footer />
  </React.Fragment>
);

const propsAreEqual = (prevProps, nextProps) => {
  if (fastDeepEqual(prevProps.route, nextProps.route)) return true;

  return false;
};

export default React.memo(Layout, propsAreEqual);
