import React from 'react';
import fastDeepEqual from 'fast-deep-equal/es6/react';
import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';
import HomePage from './components/HomePage';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>
    <HomePage />
    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
  </React.Fragment>
);

// We don't want to re-render `Layout` when route is changed but layout data is not loaded
// Layout will be re-rendered only when layout data is changed
const propsAreEqual = (prevProps, nextProps) => {
  if (fastDeepEqual(prevProps.route, nextProps.route)) return true;

  return false;
};

export default React.memo(Layout, propsAreEqual);
