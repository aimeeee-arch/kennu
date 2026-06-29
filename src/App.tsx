import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Island from './routes/Island';
import Learn from './routes/Learn';
import Review from './routes/Review';
import Bank from './routes/Bank';
import Uitrusting from './routes/Uitrusting';
import Settings from './routes/Settings';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eiland/:islandId" element={<Island />} />
        <Route path="/leer/:orbId" element={<Learn />} />
        <Route path="/review" element={<Review />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/uitrusting" element={<Uitrusting />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
