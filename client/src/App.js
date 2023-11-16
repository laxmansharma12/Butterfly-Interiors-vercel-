import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import About from './pages/About';
import KitchenDesign from "./pages/KitchenDesign";
import DesignWardrobe from "./pages/DesignWardrobe";
import BedroomDesign from './pages/BedroomDesign';
import LivingRoomDesign from './pages/LivingRoomDesign';
import DiningRoomDesign from './pages/DiningRoomDesign';
import BathroomDesign from './pages/BathroomDesign';
import BangloreCity from "./pages/BangloreCity";
import RecentProjects from "./pages/RecentProjects";
import Udashboard from "./pages/user/Udashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PrivateRoute from './components/Routes/Private';
import AdminRoute from "./components/Routes/AdminRoute";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Udashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="kitchen-design" element={<KitchenDesign />} />
        <Route path="wardrobe-design" element={<DesignWardrobe />} />
        <Route path="bedroom-design" element={<BedroomDesign />} />
        <Route path="livingroom-design" element={<LivingRoomDesign />} />
        <Route path="diningroom-design" element={<DiningRoomDesign />} />
        <Route path="bathroom-design" element={<BathroomDesign />} />
        <Route path="city-banglore" element={<BangloreCity />} />
        <Route path="recent-projects" element={<RecentProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
