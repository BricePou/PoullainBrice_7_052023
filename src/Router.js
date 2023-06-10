import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Accomodations from "./pages/Accommodations/accommodations";
import Error from "./pages/Error/error";

// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="About" element={<About />} />
//           <Route path="Accomodations" element={<Accomodations />} />
//           <Route path="Error" element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default Router




function app () {
  return (
    <Router>
      <Layout>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Accomodations" element={<Accomodations />} />
        <Route path="Error" element={<Error />} />
      </Layout>
    </Router>
  );
};

export default app;