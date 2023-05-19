import { useRecoilValue } from 'recoil';

import * as Styled from './CartButton.styled';
import { cartLengthSelector } from '../../../recoil/cartState';

const CartButton = () => {
  const cartLength = useRecoilValue(cartLengthSelector);

  return (
    <Styled.CartButton>
      <p>장바구니</p>
      <Styled.CartLengthDiv>{cartLength}</Styled.CartLengthDiv>
    </Styled.CartButton>
  );
};

export default CartButton;
