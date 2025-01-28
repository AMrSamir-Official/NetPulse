// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
// import PlaylistVideosPage from "./components/PlayListVideosPage";
// import ChannelPlaylistsPage from "./components/Playlists";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import ChannelsPage from "./pages/Channels";
// import LandingPage from "./pages/Landing";
// import Paths from "./pages/PathsPage";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       { path: "", element: <LandingPage /> },
//       { path: "/channels", element: <ChannelsPage /> },
//       { path: "/path", element: <Paths /> },

//       { path: "/playlists/:playlistId", element: <ChannelPlaylistsPage /> },
//       { path: "/playlist/:playlistId", element: <PlaylistVideosPage /> },
//     ],
//   },
// ]);
// export default function App() {
//   return <RouterProvider router={router} />;
// }
import { ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PlaylistVideosPage from "./components/PlayListVideosPage";
import ChannelPlaylistsPage from "./components/Playlists";
import darkTheme from "./darkTheme";
import AppLayout from "./pages/AppLayout/AppLayout";
import ChannelsPage from "./pages/Channels";
import CoursesPage from "./pages/CoursesPage";
import Docs from "./pages/DocsPage";
import LandingPage from "./pages/Landing";

import BasicCard from "./components/BasicCard";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import SwipeSectionPage from "./pages/CarouselPage";
import ErrorBoundary from "./pages/ErrorBoundary";
import FAQ from "./pages/FAQ";
import CustomPage from "./pages/FinalPage";
import LearnPage from "./pages/LearnPage";
import CourseDetailsPage from "./pages/Lessons";
import NotFoundPage from "./pages/NotFoundPage";
import PathDetailPage from "./pages/PathDetailPage";
import LanguageDetailPage from "./pages/PathLanguagePage";
import PathsPage from "./pages/PathsPage";
import Services from "./pages/Services";
import ToolsPage from "./pages/ToolsPage";
import TryCodePage from "./pages/TryRun";
import Tutorials from "./pages/Tutorials";
import VideoPlayerPage from "./pages/VideoPlayerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "/login", element: <AuthPage /> },
      { path: "/SwipeSectionPage", element: <SwipeSectionPage /> },
      { path: "/channels", element: <ChannelsPage /> },
      { path: "/docs", element: <Docs /> },
      { path: "/playlists/:channelId", element: <ChannelPlaylistsPage /> },
      { path: "/playlist/:playlistId", element: <PlaylistVideosPage /> },
      {
        path: "/learn/responsive-web-design/:step",
        element: <CustomPage />,
      },
      {
        path: "/video/:VideoURl",
        element: <VideoPlayerPage />,
      },
      // New routes
      { path: "/tools", element: <ToolsPage /> },
      { path: "/Tutorials", element: <Tutorials /> },
      { path: "/Services", element: <Services /> },
      // New routes
      { path: "/Courses", element: <CoursesPage /> },
      // New routes
      { path: "/paths", element: <PathsPage /> },
      { path: "/paths/:path", element: <PathDetailPage /> },
      { path: "/try/:lang", element: <TryCodePage /> },
      { path: "/BasicCard", element: <BasicCard /> },
      { path: "/About", element: <AboutPage /> },
      { path: "/FAQ", element: <FAQ /> },
      { path: "/Learn", element: <LearnPage /> },
      { path: "/Learn/:lessons", element: <CourseDetailsPage /> },
      // { path: "/Learn/:lessons/:lesson", element: <CourseDetailsPage /> },
      { path: "*", element: <NotFoundPage /> }, // هنا

      {
        path: "/paths/:path/:languages",
        element: <LanguageDetailPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
