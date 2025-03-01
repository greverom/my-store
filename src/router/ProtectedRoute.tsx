
import { Outlet } from "react-router-dom";
import { AppRoute } from "./type";


export const ProtectedRoute: React.FC<{ route: AppRoute }> = ({ route }) => {


  return <Outlet context={{ element: route.element }} />;
};