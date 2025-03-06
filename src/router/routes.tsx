import { Suspense, ReactElement } from "react";
import Loading from "../components/ui/loading";
import { AppRoute } from "./type";
import { Cart, Categories, Home} from "../pages";

const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<Loading />}>{Component}</Suspense>
);

export const appRoutes: AppRoute[] = [
  {
    path: "/home",
    element: withSuspense(<Home />),
  },
  {
    path: "/categories",
    element: withSuspense(<Categories />),
  },
  {
    path: "/cart",
    element: withSuspense(<Cart />),
  }
];