import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Content, MainLayout } from "../../styles/Layout/layout.styles";
import   Loading from "../ui/loading";
import   Sidebar from "../ui/sidebar/sidebar";
import { appRoutes } from "../../router/routes";
import { AppRoute } from "../../router/type";
import { CartProvider } from "../../context/cart/cartProvider";
import { ToastProvider } from "../../context/Toast/toastProvider";

export const Layout = () => {
  return (
    <CartProvider>
      <ToastProvider>
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
      </ToastProvider>
    </CartProvider>
  );
};

export default Layout;