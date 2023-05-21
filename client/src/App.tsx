import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TestComponent } from "./components/local/Test";
import { SocketProvider } from "./providers/socket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: TestComponent,
    },
  ]);

  return (
    <div className="container">
      <SocketProvider>
        <RouterProvider router={router}></RouterProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
