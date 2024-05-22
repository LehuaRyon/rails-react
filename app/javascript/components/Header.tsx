import React, { FC } from 'react';
// import { Button } from "@/components/ui/button"

type HeaderProps = {
  title: string;
}

const Header: FC<HeaderProps> = ({
  title
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {/* <Button variant="outline">Button</Button> */}
    </div>
  );
};

export default Header;