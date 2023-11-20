import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import VideoSearchResult from './components/VideoSearchResult';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { 
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "result",
        element: <VideoSearchResult />
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
