import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import InvoiceGenerator from './components/InvoiceGenerator';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<FileUpload />} />
            <Route path="/generate" element={<InvoiceGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;