import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/Dashboard/Dashboard";
import Team from "./page/Team/Team";
import Invoices from "./page/Invoices/Invoices";
import Contacts from "./page/Contacts/Contacts";
import Form from "./page/Form/Form";
import FAQ from "./page/FAQ/FAQ";
import Calendar from "./page/Calendar/Calendar";
// @ts-ignore
import PieChart from "./page/pieChart/PieChart";
// @ts-ignore
import BarChart from "./page/barChart/BarChart";
// @ts-ignore
import LineChart from "./page/lineChart/LineChart";
import Geography from "./page/Geography/Geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      
    </Route>
    
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
