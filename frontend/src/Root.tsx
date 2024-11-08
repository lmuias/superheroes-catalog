import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { App } from "./App";
import { HeroDetailInfo } from "./components/HeroDetailInfo";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="heroes/:hero_name" element={<HeroDetailInfo />}/>
      </Route>
    </Routes>
  );
};