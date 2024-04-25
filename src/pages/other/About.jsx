import React from "react";
import Layout from "../../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Essential Harvest</h1>
        <p className="mb-4">
          Essential Harvest is a leading organic cosmetic producer based in
          Nashik, India. We specialize in creating high-quality skincare
          products using natural ingredients, with a focus on rose geranium and
          rose hydrosol.
        </p>
        <h2 className="text-xl font-bold mb-2">Our Products</h2>
        <p className="mb-4">
          At Essential Harvest, we believe in harnessing the power of nature to
          create effective skincare solutions. Our flagship products include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Rose Geranium Cosmetics</li>
          <li>Rose Hydrosol Skincare</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide our customers with the highest quality
          organic skincare products while promoting sustainability and
          environmental responsibility. We are committed to sourcing our
          ingredients ethically and minimizing our environmental footprint
          throughout the production process.
        </p>
        <h2 className="text-xl font-bold mb-2">Location</h2>
        <p className="mb-4">
          Essential Harvest is located in the beautiful city of Nashik, known
          for its picturesque landscapes and rich agricultural heritage.
        </p>
        <h2 className="text-xl font-bold mb-2">Delivery</h2>
        <p className="mb-4">
          We deliver our products nationwide across India, ensuring that
          customers from all corners of the country can enjoy the benefits of
          our organic skincare offerings.
        </p>
        {/* Feel free to add more sections or customize the content further */}
      </div>
    </Layout>
  );
};

export default About;
