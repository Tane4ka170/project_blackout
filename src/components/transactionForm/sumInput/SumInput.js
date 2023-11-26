import React from "react";
import { Controller } from "react-hook-form";

const SumInput = ({ control }) => {
  return (
      <Controller
        name="sum"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="sum">Sum</label>
            <input
              id="sum"
              type="number"
              placeholder="Enter the sum"
              {...field}
            />
          </>
        )}
      /> 
  );
};


export default SumInput;