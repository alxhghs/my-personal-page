import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import HomePage from "./pages";
import BlogPage from "./pages/blog";
import ResumePage from "./pages/resume";
import NotFoundPage from "./pages/404";
import BlogPostPage from "./templates/BlogPost";
import CssGridPage1 from "./pages/blog/css-grid/1";
import CssGridPage2 from "./pages/blog/css-grid/2";
import CssGridPage3 from "./pages/blog/css-grid/3";
import CssGridPage4 from "./pages/blog/css-grid/4";
import CssGridPage5 from "./pages/blog/css-grid/5";
import CssGridPage6 from "./pages/blog/css-grid/6";
import CssGridPage7 from "./pages/blog/css-grid/7";
import CssGridPage8 from "./pages/blog/css-grid/8";
import CssGridPage9 from "./pages/blog/css-grid/9";
import CssGridPage10 from "./pages/blog/css-grid/10";
import CssGridPage11 from "./pages/blog/css-grid/11";

const cssGridPages: Record<string, React.FC> = {
  "1": CssGridPage1,
  "2": CssGridPage2,
  "3": CssGridPage3,
  "4": CssGridPage4,
  "5": CssGridPage5,
  "6": CssGridPage6,
  "7": CssGridPage7,
  "8": CssGridPage8,
  "9": CssGridPage9,
  "10": CssGridPage10,
  "11": CssGridPage11,
};

const CssGridRoute: React.FC<{ page: string }> = ({ page }) => {
  const Component = cssGridPages[page];
  if (!Component) {
    return <NotFoundPage />;
  }
  return <Component />;
};

export const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/css-grid" element={<Navigate to="/blog/css-grid/1" replace />} />
      <Route path="/blog/css-grid/1" element={<CssGridRoute page="1" />} />
      <Route path="/blog/css-grid/2" element={<CssGridRoute page="2" />} />
      <Route path="/blog/css-grid/3" element={<CssGridRoute page="3" />} />
      <Route path="/blog/css-grid/4" element={<CssGridRoute page="4" />} />
      <Route path="/blog/css-grid/5" element={<CssGridRoute page="5" />} />
      <Route path="/blog/css-grid/6" element={<CssGridRoute page="6" />} />
      <Route path="/blog/css-grid/7" element={<CssGridRoute page="7" />} />
      <Route path="/blog/css-grid/8" element={<CssGridRoute page="8" />} />
      <Route path="/blog/css-grid/9" element={<CssGridRoute page="9" />} />
      <Route path="/blog/css-grid/10" element={<CssGridRoute page="10" />} />
      <Route path="/blog/css-grid/11" element={<CssGridRoute page="11" />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
);
