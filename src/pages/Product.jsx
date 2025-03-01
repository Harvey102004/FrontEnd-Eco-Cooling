import React, { useEffect, useState } from "react";
import { Icons } from "../assets/icons/Icons";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../components/Loading";

const Product = () => {
  // LAGAYAN  TO NG DATA && SORTED DATA

  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // VALUE TO NG FILTERED OPTION

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedWarranty, setSelectedWarranty] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const navigate = useNavigate();

  // FETCHING  TO NG DATA FAKEDATA LANG TO. YUNG LINK AYON YUNG PAPALTAN NG API SA BACKEND

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Error Fetching data");
        }

        setIsLoading(true);

        setItems(data);
        setSortedItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ETO YUNG SORTING AT FILTERING NG TABLE

  useEffect(() => {
    let filtered = [...items];

    if (selectedBrand) {
      filtered = filtered.filter(
        (item) =>
          item.brands.trim().toLowerCase() ===
          selectedBrand.trim().toLowerCase(),
      );
    }

    if (selectedWarranty) {
      filtered = filtered.filter((item) => {
        if (selectedWarranty === "nowarranty") {
          return item.warranty.trim().toLowerCase() === "no warranty";
        } else if (selectedWarranty === "underwarranty") {
          return item.warranty.trim().toLowerCase() !== "no warranty";
        }
        return true;
      });
    }

    if (selectedStatus) {
      filtered = filtered.filter(
        (item) =>
          item.status.trim().toLowerCase() ===
          selectedStatus.trim().toLowerCase(),
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });
    }

    setSortedItems(filtered);
  }, [items, selectedBrand, selectedWarranty, selectedStatus, sortBy]);

  // ETO YUNG VALUE KADA TABLE

  const header = [
    { label: "Job No.", value: "jobno" },
    { label: "Customer Name", value: "customername" },
    { label: "Brands", value: "brands" },
    { label: "Part Name", value: "partname" },
    { label: "Part No.", value: "partno" },
    { label: "Warranty", value: "warranty" },
    { label: "Status", value: "status" },
  ];

  // VALUE NG BRANDS

  const brands = [
    { label: "Panasonic", value: "panasonic" },
    { label: "Carrier", value: "carrier" },
    { label: "Midea", value: "midea" },
    { label: "Whirlpool", value: "whirlpool" },
    { label: "Fujidenzo", value: "fujidenzo" },
    { label: "Camel", value: "camel" },
    { label: "Lg", value: "lg" },
  ];

  document.title = "Products";

  return (
    <div className="flex flex-col gap-3">
      {/* ---------------  ETO YUNG TITLE AT ICON SA TAAS NG PRODUCTS --------------- */}

      <div className="flex items-center gap-5">
        <Icons.Product size={40} />
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>

      {/* --------------- ETO YUNG MGA BUTTON PARA SA SORT FILTER AT ADD ITEM  ---------------*/}

      <div className="items- mt-11 flex h-10 w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Icons.Filter size={25} />
          <div className="flex items-center gap-2">
            <p className="text-sm">Sort By :</p>

            {/* --------------- ETO YUNG SORTING --------------- */}

            <div className="relative">
              <Icons.Dropdown className="text-light pointer-events-none absolute top-1/2 right-0 -translate-1/2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark text-light appearance-none rounded-md p-3 pr-10 text-xs outline-0"
              >
                <option value="" selected disabled>
                  Select
                </option>
                {header.map((head) => (
                  <option key={head.value} value={head.value}>
                    {head.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* --------------- ETO YUNG FILTERING  ---------------*/}

          <div className="flex items-center gap-2">
            <p className="text-sm">Filtered By :</p>

            {/*  --------------- FILTER NG BRANDS --------------- */}

            <div className="relative">
              <Icons.Dropdown className="text-light pointer-events-none absolute top-1/2 right-0 -translate-1/2" />
              <select
                className="bg-dark text-light appearance-none rounded-md p-3 pr-10 text-xs outline-0"
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                }}
              >
                <option value="" selected disabled>
                  Brand
                </option>
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand.value} value={brand.value}>
                    {brand.label}
                  </option>
                ))}
              </select>
            </div>

            {/* ------------- FILTER NG WARRANTY --------------- */}

            <div className="relative">
              <Icons.Dropdown className="text-light pointer-events-none absolute top-1/2 right-0 -translate-1/2" />
              <select
                className="bg-dark text-light appearance-none rounded-md p-3 pr-10 text-xs outline-0"
                value={selectedWarranty}
                onChange={(e) => {
                  setSelectedWarranty(e.target.value);
                }}
              >
                <option value="" selected disabled>
                  Warranty
                </option>
                <option value="">All Warranty</option>
                <option value="underwarranty">Under Warranty</option>
                <option value="nowarranty">No warranty</option>
              </select>
            </div>

            {/*  --------------- FILTER NG STATUS --------------- */}

            <div className="relative">
              <Icons.Dropdown className="text-light pointer-events-none absolute top-1/2 right-0 -translate-1/2" />
              <select
                className="bg-dark text-light appearance-none rounded-md p-3 pr-10 text-xs outline-0"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="" selected disabled>
                  Status
                </option>
                <option value="">All Status</option>
                <option value="released">Released</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/*  --------------- ADD ITEM BUTTON --------------- */}

        <div className="">
          <button
            className="bg-dark text-light mr-2 cursor-pointer rounded-md px-5 py-3 text-xs hover:opacity-90"
            onClick={() => navigate("/products/addItem")}
          >
            Add Item
          </button>
        </div>
      </div>

      {/*  --------------- ETO YUNG TABLE --------------- */}

      <div className="tableContainer max-h-[70vh] w-full overflow-y-auto pr-2">
        <table className="w-full border-collapse border-2">
          <thead className="bg-dark text-light sticky top-0">
            <tr>
              {header.map((head, index) => (
                <th
                  key={index}
                  className="px-3 py-4 text-start text-sm font-semibold"
                >
                  {head.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              sortedItems.length > 0 ? (
                sortedItems.map((item, index) => (
                  <tr
                    key={index}
                    className="trProduct cursor-pointer border-b-2"
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    {header.map((head, index) => (
                      <td
                        className="max-w-[20px] truncate p-3 text-xs"
                        key={index}
                      >
                        {item[head.value]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={header.length} className="h-[400px] text-center">
                    No products found
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan={header.length} className="h-[200px] text-center">
                  <Loading />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
