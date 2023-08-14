import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../utils/api";
import NavbarAdmin from "../../components/NavbarAdmin";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { updateShippingReducer } from "../../reducers/shippingReducer";
import { useNavigate } from "react-router-dom";

export default function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userReducer } = useSelector((s) => s);

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/finance/shippingComps`, {
          headers: {
            Authorization: `Bearer ${userReducer.value.data.data.access_token}`,
          },
        });

        console.log(response.data);
        setData(response.data.data);
        dispatch(updateShippingReducer(response.data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <NavbarAdmin />
      <div className="flex">
        <Sidebar />
        <Content>
          <div className="flex-1 justify-center text-black max-w-full h-full  ">
            <div className="flex justify-between text-black w-full h-28">
              <div className="flex">
                <p className="uppercase text-2xl font-bold mx-2">
                  Shipping Comps
                </p>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="mr-2 text-blue-500 cursor-pointer"
                  size="2x"
                  onClick={() => navigate("/AddShipping")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 border mb-4 "
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-full rounded-2xl">
                <h2 className="p-2 bg-gray-200 font-bold">Name</h2>
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="border-b-2 p-2"
                    onClick={() =>
                      navigate("/DetailShipping", { state: { id: item.id } })
                    }
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}
