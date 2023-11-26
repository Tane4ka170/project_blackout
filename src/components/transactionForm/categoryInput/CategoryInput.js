import React from "react";
import { Controller } from "react-hook-form";
import PreSelectType from "components/preSelectType/PreSelectType";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const TransactionCategoryInput = ({ control }) => {
  const { transactionsType } = useParams();
  const navigate = useNavigate();

  const handleTypeChange = (value) => {
    navigate(`/transactions/${value}`)
    console.log(transactionsType)
  };

  return (
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="category">Category</label>
            <input
              id="desc"
              type="textarea"
              placeholder="Different"
              {...field}
              value=''
              onClick={() => handleTypeChange(PreSelectType(transactionsType))}
            />
          </>
        )}
      />
  );
};


export default TransactionCategoryInput;