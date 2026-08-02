import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "./ScrollToTop";
import HomePage from "../features/landing/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import AlltagshilfePage from "../features/alltagshilfe/pages/AlltagshilfePage";
import SalonPage from "../features/salon/pages/SalonPage";
import FriendPage from "../features/friend/pages/FriendPage";
import NewsPage from "../features/news/pages/NewsPage";
import MembershipPage from "../features/membership/pages/MembershipPage";
import BookingPage from "../features/booking/pages/BookingPage";
import ContactPage from "../features/contact/pages/ContactPage";
import ImpressumPage from "../features/legal/pages/ImpressumPage";
import DatenschutzPage from "../features/legal/pages/DatenschutzPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ueber-uns" element={<AboutPage />} />
          <Route path="alltagshilfe" element={<AlltagshilfePage />} />
          <Route path="leistungen" element={<Navigate to="/alltagshilfe" replace />} />
          <Route path="salon" element={<SalonPage />} />
          <Route path="friend" element={<FriendPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="events" element={<Navigate to="/news" replace />} />
          <Route path="mitgliedschaft" element={<MembershipPage />} />
          <Route path="beratung" element={<BookingPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="impressum" element={<ImpressumPage />} />
          <Route path="datenschutz" element={<DatenschutzPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
