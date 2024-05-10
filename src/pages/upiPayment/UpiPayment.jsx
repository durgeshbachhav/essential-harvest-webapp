import Layout from "../../components/layout/Layout";
import ScannerImage from "../../assets/UPI.jpg"; // Import the scanner image

const UpiPayment = () => {
  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-center flex-col py-20">
        <h2 className="font-bold py-4">Payment Page</h2>
        <div className="w-full h-full flex items-center justify-center">
          <img className="w-96" src={ScannerImage} alt="Scanner" />
        </div>
      </div>
    </Layout>
  );
};

export default UpiPayment;
