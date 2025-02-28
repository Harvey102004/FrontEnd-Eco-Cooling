import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../assets/icons/Icons";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [product, setProduct] = useState({
    remarks: "",
    status: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        setProduct({ remarks: data.remarks, status: data.status });
        setProductDetail(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:3001/products/${id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(product),
  //     });

  //     if (!response.ok) throw new Error("Failed to update product");

  //     navigate(`/products/${id}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="bg-tagos absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
      <div className="bg-dark shadow-form relative rounded-lg p-10 pb-25 text-white">
        <h1 className="mb-6 text-center text-3xl font-bold">Edit Item</h1>
        <p className="mb-8 text-center text-sm">
          Only status and remarks can be edited.
        </p>
        <Icons.Exit
          className="absolute top-5 right-5 cursor-pointer text-2xl transition-all duration-500 hover:text-red-500"
          onClick={() => navigate(`/products/${id}`)}
        />
        {/*-------------- ETO YUNG MGA HINDI NA EEDIT --------------*/}
        <div className="flex gap-8">
          <div className="">
            {/* ------------- INPUT TO NG JOB NUMBER HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Job No. *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.jobno}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>

            {/* ------------- INPUT TO NG CUSTOMER NAME HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Customer name *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.customername}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>

            {/* ------------- INPUT TO NG BRANDS HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Brand *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.brands}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>

            {/* ------------- INPUT TO NG PARTNAME HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Part name *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.partname}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>

            {/* ------------- INPUT TO NG PARTNUMBER HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Part number *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.partno}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>

            {/* ------------- INPUT TO NG WARRANTY HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Warranty *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.warranty}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>
          </div>

          <div className="">
            {/* ------------- INPUT TO NG DATE ADDED HINDI TO NA EEDIT -------------  */}

            <div>
              <label htmlFor="" className="text-xs text-nowrap">
                Date Added *
              </label>
              <input
                type="text"
                disabled
                value={productDetail.dateadded}
                className="bg-light mt-1 w-full rounded-md p-3 text-xs text-gray-500 outline-0"
              />
            </div>

            {/* ------------- ETO YUNG  FORM NA NA EEDIT -------------  */}

            <form className="flex flex-col gap-4">
              <div className="relative">
                <label htmlFor="status" className="text-xs text-nowrap">
                  Status :
                </label>
                <Icons.Dropdown className="text-dark pointer-events-none absolute top-[70%] right-0 -translate-1/2" />
                <select
                  className="bg-light text-dark mt-1 w-full appearance-none rounded-md p-3 pr-10 text-xs outline-0"
                  id="status"
                  name="status"
                  value={product.status}
                  onChange={handleChange}
                >
                  <option value="released">Released</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="remarks" className="text-xs text-nowrap">
                  Remarks :
                </label>
                <textarea
                  name="remarks"
                  id="remarks"
                  className="bg-light text-dark h-60 resize-none rounded-md p-3 text-xs outline-0"
                  placeholder="Write your remarks..."
                  value={product.remarks}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="absolute bottom-5 left-1/2 mt-4 flex w-full -translate-x-1/2 justify-center gap-3">
                <button
                  type="submit"
                  className="bg-light text-dark cursor-pointer rounded-md px-6 py-2 text-sm hover:opacity-85"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/products/${id}`)}
                  className="text-light cursor-pointer rounded-md border px-10 py-3 text-sm hover:opacity-85"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
