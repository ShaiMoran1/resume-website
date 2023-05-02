import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main-page/MainPage";
import { PageLayout } from "./components/layout/PageLayout";
import { AboutPage } from "./pages/about/AboutPage";
import { GaloryPage } from "./pages/galory/GaloryPage";

export const Router: React.FC = () => {
  // const globalContext = useGlobalContext();
  const RoutesComponent = () => {
    return useRoutes([
      {
        path: "*",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "galory",
        element: <GaloryPage />,
      }
    ]);
  };

  return (
    <BrowserRouter>
      <PageLayout>
        <RoutesComponent />
      </PageLayout>
    </BrowserRouter>
  );
};
