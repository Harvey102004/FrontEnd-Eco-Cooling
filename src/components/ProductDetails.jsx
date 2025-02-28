import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../assets/icons/Icons";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/products/${id.toString()}`,
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();

        setProductDetails(data);
      } catch (error) {}
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="bg-tagos absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
      <div className="bg-dark text-light shadow-form relative rounded-lg p-10">
        <Icons.Exit
          className="absolute top-4 right-4 cursor-pointer text-2xl transition-all duration-500 hover:text-red-500"
          onClick={() => navigate("/products")}
        />
        <h1 className="mb-10 text-center text-3xl font-bold">Item Details</h1>
        <div className="flex items-center gap-8">
          <div className="h-[250px] max-h-[250px] w-[250px] max-w-[250px] overflow-hidden border p-2">
            {productDetails && productDetails.imageurl ? (
              <>
                {!imageLoaded && (
                  <p className="text-light mt-[50%] w-full text-center text-sm">
                    Loading image...
                  </p>
                )}
                <img
                  src={productDetails.imageurl}
                  className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  alt="Product"
                  onLoad={() => setImageLoaded(true)}
                />
              </>
            ) : (
              <p className="text-sm text-gray-500">Loading image...</p>
            )}
          </div>
          <div className="flex max-w-[400px] flex-col gap-3">
            <div className="flex justify-between">
              <p>Job No. :</p>
              <p className="text-md font-medium">{productDetails.jobno}</p>
            </div>
            <div className="flex justify-between">
              <p>Customer name :</p>
              <p className="text-md font-medium">
                {productDetails.customername}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Brand :</p>
              <p className="text-md font-medium">{productDetails.brands}</p>
            </div>
            <div className="flex justify-between">
              <p>Part Name :</p>
              <p className="text-md font-medium">{productDetails.partname}</p>
            </div>
            <div className="flex justify-between">
              <p>Part No. :</p>
              <p className="text-md font-medium">{productDetails.partno}</p>
            </div>
            <div className="flex justify-between">
              <p>Warranty :</p>
              <p className="text-md font-medium">{productDetails.warranty}</p>
            </div>
            <div className="flex justify-between">
              <p>Status :</p>
              <p className="text-md font-medium">{productDetails.status}</p>
            </div>
            <div className="flex justify-between">
              <p>Date Added :</p>
              <p className="text-md font-medium">{productDetails.dateadded}</p>
            </div>
            <div className="flex gap-20">
              <p className="text-nowrap">Remarks :</p>
              <p className="max-h-[150px] overflow-y-auto text-end text-xs leading-5">
                {productDetails.remarks}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex items-center justify-center gap-5">
          <button
            className="bg-light text-dark cursor-pointer rounded-md px-8 py-3 hover:opacity-85"
            onClick={() => navigate(`/products/edit/${id}`)}
          >
            Edit
          </button>
          <button className="text-light cursor-pointer rounded-md border px-6 py-3 hover:opacity-85">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
