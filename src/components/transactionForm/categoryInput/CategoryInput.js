// base
import React from "react";
import { useParams } from "react-router";

// modal
import Modal from "components/modal/Modal";
import { useModal } from "components/hooks/useModal";

// form
import { Controller } from "react-hook-form";

// components 
import { Categories } from "components/categories/Categories";

// styled
import { StyledInputWrapper, StyledLabel, StyledCategoryInput } from "./CategoryInput.styled";


const CategoryInput = ({ control, setValue, setCategoryId }) => {
  const { isOpened, openModal, closeModal } = useModal();
  const { transactionsType } = useParams();

  const handleSetCategory = (selectedCategory) => {
    setCategoryId(selectedCategory.id);
    setValue("category", selectedCategory);
  };


  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <StyledInputWrapper>
          <StyledLabel htmlFor="category">Category</StyledLabel>
          <StyledCategoryInput
            id="category"
            type="textarea"
            placeholder="Different"
            {...field}
            value={field.value}
            onClick={() => {
              openModal()
            }
            }
          />
          {isOpened ? <Modal
            children={
              <Categories
                type={transactionsType}
                chooseCategories={handleSetCategory
                }
                closeModal={closeModal}
                setCategoryId={setCategoryId}
              />
            } closeModal={closeModal} /> : null}
        </StyledInputWrapper>
      )}
    />
  );
};

export default CategoryInput;