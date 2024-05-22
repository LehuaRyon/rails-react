import React, { FC } from 'react';
import { Button } from "../../../@/components/ui/button";
// import { Button } from './button';

type ButtonSectionProps = {
  buttonText: string;
}

const ButtonSection: FC<ButtonSectionProps> = ({
  buttonText
}) => {
  return (
    <div>
      <Button variant="outline">{buttonText}</Button>
    </div>
  );
};

export default ButtonSection;