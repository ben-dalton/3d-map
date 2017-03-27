import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
`;

const Level = ({level}) => {
  return (
    <Div>{level.label}</Div>
  );
};

export default Level;
