
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Layout from './component/Layout/layout';

function App() {
  return (
    <>
    <Analytics/>
    <SpeedInsights/>
    <Layout/>
    </>
  );
}

export default App;
