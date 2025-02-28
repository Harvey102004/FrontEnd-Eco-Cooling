import React, { useState } from "react";
import { Icons } from "../assets/icons/Icons";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [hasWarranty, setHasWarranty] = useState(null);

  const navigate = useNavigate();

  // LAGAYAN TO NG MGA VALUE SA MGA INPUT TAPOS ETO RIN GAMIT SA PAG POST SA BACK END

  const [formData, setFormData] = useState({
    imageUrl: null,
    jobNo: "",
    customerName: "",
    brandValue: "",
    partName: "",
    partNumber: "",
    warranty: "",
    status: "",
    dateValue: "",
    remarks: "",
  });

  // FUNCTION TO SA PAG CHANGE NG VALUE SA MGA INPUT SA FORM

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: file,
      }));
    }
  };

  // ETO YUNG PAG SEND NG DATA SA BACK END

  const handleSubmit = (e) => {
    e.preventDefault();

    // ETO YUNG PAG FETCH PARA MA ADD YUNG ITEM SO YUNG LINK PAPALTAN YON NG API SA BACK END

    // fetch("https://your-api.com/add-item", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     navigate("/products"); // Redirect sa products page
    //   })
    //   .catch((error) => console.error("Error:", error));
  };

  // VALUE  TO NG BRANDS

  const brands = [
    { label: "Panasonic", value: "panasonic" },
    { label: "Carrier", value: "carrier" },
    { label: "Midea", value: "midea" },
    { label: "Whirlpool", value: "whirlpool" },
    { label: "Fujidenzo", value: "fujidenzo" },
    { label: "Camel", value: "camel" },
    { label: "Lg", value: "lg" },
  ];

  return (
    <div className="-50 bg-tagos absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
      <div className="bg-dark text-light shadow-form relative rounded-lg p-8">
        {/* ------------- EXIT BUTTON --------------*/}

        <Icons.Exit
          className="absolute top-5 right-5 cursor-pointer text-2xl transition-all duration-500 hover:text-red-500"
          onClick={() => navigate("/products")}
        />

        {/* ------------- TITLE --------------*/}

        <h1 className="mb-10 text-center text-3xl font-bold">Add Item</h1>

        {/* ------------- FORM NG ADD ITEM ------------- */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              {/* ------------ INPUT TO NG IMAGE ------------ */}

              <div className="flex w-[300px] flex-col gap-2">
                <label htmlFor="imageUrl" className="text-xs text-nowrap">
                  Item image :
                </label>
                <input
                  type="file"
                  id="imageUrl"
                  onChange={handleFileChange}
                  className="bg-light text-dark rounded-md p-2 text-xs outline-0 file:mr-3 file:rounded-md file:bg-gray-300 file:px-3 file:py-1"
                />
              </div>

              {/* ------------ INPUT TO NG JOB NUMBER ------------ */}

              <div className="flex flex-col gap-2">
                <label htmlFor="jobNo" className="text-xs text-nowrap">
                  Job Number:
                </label>
                <input
                  type="text"
                  id="jobNo"
                  placeholder="Job number..."
                  value={formData.jobNo}
                  onChange={handleChange}
                  className="bg-light text-dark file:text-light w-full rounded-md p-3 text-xs outline-0"
                />
              </div>

              {/* ------------ INPUT TO NG CUSTOMER NAME ------------ */}

              <div className="flex flex-col gap-2">
                <label htmlFor="customerName" className="text-xs text-nowrap">
                  Customer Name:
                </label>
                <input
                  type="text"
                  id="customerName"
                  placeholder="Customer name..."
                  value={formData.customerName}
                  onChange={handleChange}
                  className="bg-light text-dark file:text-light w-full rounded-md p-3 text-xs outline-0"
                />
              </div>

              {/* ------------ SELECT OPTIONS TO NG BRANDS ------------ */}

              <div className="relative flex flex-col gap-2">
                <label htmlFor="brandValue" className="text-xs text-nowrap">
                  Brands :
                </label>
                <Icons.Dropdown className="text-dark pointer-events-none absolute top-[70%] right-0 -translate-1/2" />
                <select
                  className="bg-light text-dark w-full appearance-none rounded-md p-3 pr-10 text-xs outline-0"
                  id="brandValue"
                  value={formData.brandValue}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Brand
                  </option>
                  {brands.map((brand) => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ------------ INPUT TO NG PART NAME ------------ */}

              <div className="flex flex-col gap-2">
                <label htmlFor="partName" className="text-xs text-nowrap">
                  Part Name:
                </label>
                <input
                  type="text"
                  id="partName"
                  placeholder="Part name..."
                  value={formData.partName}
                  onChange={handleChange}
                  className="bg-light text-dark file:text-light w-full rounded-md p-3 text-xs outline-0"
                />
              </div>
            </div>

            <div className="flex w-[300px] flex-col gap-4">
              {/* ------------ INPUT TO NG PART NUMBER ------------ */}

              <div className="flex flex-col gap-2">
                <label htmlFor="partNumber" className="text-xs text-nowrap">
                  Part Number:
                </label>
                <input
                  type="text"
                  id="partNumber"
                  placeholder="Part number..."
                  value={formData.partNumber}
                  onChange={handleChange}
                  className="bg-light text-dark w-full rounded-md p-3 text-xs outline-0"
                />
              </div>

              {/* ------------ INPUT TO NG WARRANTY ------------ */}

              <div className="flex flex-col gap-2">
                <label className="text-xs text-nowrap" htmlFor="warranty">
                  Warranty :
                </label>

                {hasWarranty === null && (
                  <div className="flex items-center gap-3">
                    <p className="text-xs">
                      Does this product have a warranty?
                    </p>
                    <div className="flex gap-3">
                      <button
                        className="cursor-pointer hover:font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          setHasWarranty(true);
                          setFormData((prev) => ({ ...prev, warranty: "" }));
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className="cursor-pointer hover:font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          setHasWarranty(false);
                          setFormData((prev) => ({
                            ...prev,
                            warranty: "No warranty",
                          }));
                        }}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}

                {/* ----------  PAG YES ETO LALABAS ----------  */}

                {hasWarranty === true && (
                  <input
                    type="text"
                    className="bg-light text-dark file:text-light w-full rounded-md p-3 text-xs outline-0"
                    placeholder="Enter warranty details..."
                    id="warranty"
                    value={formData.warranty}
                    onChange={handleChange}
                  />
                )}

                {/* ---------- PAG NO ETO ----------  */}

                {hasWarranty === false && (
                  <input
                    type="text"
                    className="bg-light text-dark file:text-light w-full rounded-md p-3 text-xs outline-0"
                    value="No Warranty"
                    readOnly
                  />
                )}
              </div>

              {/* ------------ SELECT OPTION TO NG STATUS ------------ */}

              <div className="relative flex flex-col gap-2">
                <label htmlFor="status" className="text-xs text-nowrap">
                  Status :
                </label>
                <Icons.Dropdown className="text-dark pointer-events-none absolute top-[70%] right-0 -translate-1/2" />
                <select
                  className="bg-light text-dark w-full appearance-none rounded-md p-3 pr-10 text-xs outline-0"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Status
                  </option>
                  <option value="released">Released</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              {/* ------------ INPUT TO NG DATE ------------ */}

              <div className="flex flex-col gap-2">
                <label htmlFor="dateValue" className="text-xs text-nowrap">
                  Date :
                </label>
                <input
                  type="date"
                  id="dateValue"
                  className="bg-light text-dark file:text-light w-full rounded-md p-3 text-xs outline-0"
                  value={formData.dateValue}
                  onChange={handleChange}
                />
              </div>

              {/* ------------ INPUT TO REMARKS  ------------ */}

              <div className="flex flex-col gap-3">
                <label htmlFor="remarks" className="text-xs text-nowrap">
                  Remarks :
                </label>
                <textarea
                  name=""
                  id="remarks"
                  className="bg-light text-dark file:text-light h-30 resize-none rounded-md p-3 text-xs outline-0"
                  placeholder="Write your remarks..."
                  value={formData.remarks}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* ------------  BUTTON NG SUBMIT  ------------ */}

          <input
            type="submit"
            value={"Submit"}
            className="bg-light text-dark mx-auto w-1/4 cursor-pointer rounded-sm py-3 text-sm font-medium hover:opacity-85"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
