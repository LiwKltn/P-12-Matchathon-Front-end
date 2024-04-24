import React from 'react';
import FormCoders from '../components/FormCoders';
import Banner_nav from '../components/Atoms/Banner_nav';
import CodersFormText from '../components/CodersFormText';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner_nav />
      <CodersFormText />
      <FormCoders />
    </>
  )
}

export default Home