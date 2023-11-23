import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
