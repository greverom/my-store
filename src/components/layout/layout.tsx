import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import   Loading from "../ui/loading";
import   Sidebar from "../ui/sidebar/sidebar";
import { Content, MainLayout } from "../../styles/Layout/layout.styles";
import { AppRoute } from "../../router/type";
import { appRoutes } from "../../router/routes";
import { CartProvider } from "../../context/cartProvider";

export const Layout = () => {
  return (
    <CartProvider>
      <MainLayout>
        <Sidebar /> 
        <Content>
          <Suspense fallback={<Loading />}>
            <Routes>
            {appRoutes.map((route: AppRoute, index: number) => (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children?.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      index={childRoute.index}
                      element={childRoute.element}
                    />
                  ))}
                </Route>
              ))}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
        </Content>
      </MainLayout>
    </CartProvider>
  );
};

export default Layout;