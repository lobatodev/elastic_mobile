import React, {useState} from 'react';
import {Container, Label, InputContainer} from './styles';
const Input = ({type, label, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer
        type={type}
        focus={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
};
export default Input;
