import "./App.css";
import { Router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>react-icon-cx</title>
        <meta
          name="description"
          content="Include popular icons in your React projects easly with react-icons."
        />
        <meta name="keywords" content="React, Icons, Tree Shaking, SVG, png, react-icon"></meta>
      </Helmet>
      <div className="wrapper">
        <Router />
      </div>
    </HelmetProvider>
  );
}

export default App;
