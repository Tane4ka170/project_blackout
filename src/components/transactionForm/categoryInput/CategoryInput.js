// base
import React, { useState } from "react";
import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";

// modal
import Modal from "components/modal/Modal";
import { useModal } from "components/hooks/useModal";

// form
import { Controller } from "react-hook-form";

// components 
// import PreSelectType from "components/preSelectType/PreSelectType";
import { Categories } from "components/categories/Categories";

// styled
import { StyledInputWrapper, StyledLabel, StyledCategoryInput } from "./CategoryInput.styled";


const CategoryInput = ({ control }) => {
  const { isOpened, openModal, closeModal } = useModal();
  const [ categories, setCategories ] = useState('car')
  const { transactionsType } = useParams();
  // const navigate = useNavigate();

  // const handleTypeChange = (value) => {
  //   navigate(`/transactions/${value}`)
  //   console.log(transactionsType)
  // };

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
            value={categories}
            onClick={() => {
              // handleTypeChange(PreSelectType(transactionsType))
              openModal()
            }
            }
          />
          {isOpened ? <Modal children={<Categories type={ transactionsType } chooseCategories={ setCategories } />} closeModal={closeModal} /> : null}
        </StyledInputWrapper>
      )}
    />
  );
};


export default CategoryInput;



// export default Modal;

// import { useModal } from 'components/hooks/useModal';

// const { isOpen, openModal, closeModal } = useModal();

// <div>
//   <button onClick={openModal}>open</button>
//   {isOpen ? <Modal closeModal={closeModal} /> : null}
// </div>;
// Передати ці значення на Header кнопка UserSettings!!!!
