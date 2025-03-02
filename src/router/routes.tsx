import { Suspense, ReactElement } from "react";
import Loading from "../components/ui/loading";
import { AppRoute } from "./type";
import Home from "../pages/home";
import Shopping from "../pages/shopping";
import Categories from "../pages/categories";


const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<Loading />}>{Component}</Suspense>
);

export const appRoutes: AppRoute[] = [
  {
    path: "/home",
    element: withSuspense(<Home />),
  },
  {
    path: "/shopping",
    element: withSuspense(<Shopping />),
  },
  {
    path: "/categories",
    element: withSuspense(<Categories />),
  }
];