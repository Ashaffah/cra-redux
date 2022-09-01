import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  getProducts,
  productSelector,
  deleteProduct,
} from "../features/productSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col mt-4">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <Link to="add">
                <button className="bg-emerald-500 hover:bg-emerald-700 mx-1 my-1 text-white font-bold py-2 px-4 rounded">
                  Add New
                </button>
              </Link>
              <table className="min-w-full divide-y text-center divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      NO
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      TITLE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      PRICE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>
                        <Link to={`edit/${product.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-700 mx-1 my-1 text-white font-sm  py-2 px-4 rounded">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(deleteProduct(product.id))}
                          className="bg-red-500 hover:bg-red-700 mx-1 my-1 text-white font-sm py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
