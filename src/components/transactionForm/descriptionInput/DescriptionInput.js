import React from "react";
import { Controller } from "react-hook-form";

const DescriptionInput = ({ control }) => {
  return (
      <Controller
        name="desc"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="desc">Comment</label>
            <input
              id="desc"
              type="textarea"
              placeholder="Enter the text"
              {...field}
            />
          </>
        )}
      />
  );
};


export default DescriptionInput;