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
    <div className="box mt-5">
      <Link to="add" className="button is-success">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`edit/${product.id}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteProduct(product.id))}
                  className="button is-danger is-small"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
