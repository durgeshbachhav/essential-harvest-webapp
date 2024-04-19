import React from 'react';
import Layout from '../../components/layout/Layout';

function NoPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-96">
        <div className="text-4xl font-bold text-green-500">404! Not found</div>
      </div>
    </Layout>
  );
}

export default NoPage;
