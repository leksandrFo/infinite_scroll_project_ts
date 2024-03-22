import { FC, ReactNode } from 'react'
import { Button } from 'react-bootstrap';

interface ICardButton {
  children: ReactNode,
  className?: string,
  onClick: () => void,
}

const CardButton: FC<ICardButton> = ({ children, onClick }) => {
  return (
    <Button variant='primary' onClick={onClick}>
      {children}
    </Button>
  );
}

export default CardButton;