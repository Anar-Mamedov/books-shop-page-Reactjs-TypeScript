import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Auth from "./pages/Auth/ui/Auth";
import BookDetails from "./pages/Dashboard/Books/ui/Details";
import Books from "./pages/Dashboard/Books/ui";
import Dashboard from "./pages/Dashboard";
import tokenSelector from "./common/store/recoil/token/selector";

// Email - anar@gmail.com
// Password - 123

function RestrictedContent({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const token = useRecoilValue(tokenSelector);

  return token ? (
    children
  ) : (
    <Navigate
      to="/auth"
      replace
      state={{
        from: location.pathname,
      }}
    />
  );
}

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/dashboard"
        element={
          <RestrictedContent>
            <Dashboard />
          </RestrictedContent>
        }
      >
        <Route
          path="books"
          element={
            <RestrictedContent>
              <Books />
            </RestrictedContent>
          }
        />
        <Route
          path="books/:bookId"
          element={
            <RestrictedContent>
              <BookDetails />
            </RestrictedContent>
          }
        />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
// /dashboard/books

export default App;
