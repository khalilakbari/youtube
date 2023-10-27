import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetils";
import AppContext from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
         <Header />
         <div className="flex flex-col h-full">
          <Routes>
             <Route path="/" element={<Feed />}/>
             <Route path="/searchResult/:searchQuery" element={<SearchResult />}/>
             <Route path="/video/:id" element={<VideoDetails />}/>
          </Routes>
         </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
