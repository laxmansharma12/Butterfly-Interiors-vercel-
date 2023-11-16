import React from 'react';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Layouts = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>
        <Toaster />
        {children}
      </main>
    </div>
  );
};
Layouts.defaultProps = {
  title: "Butterfly-Interiors",
  description: "",
  keywords: "interiors,react,node,mongodb",
  author: "laxman",
};
export default Layouts