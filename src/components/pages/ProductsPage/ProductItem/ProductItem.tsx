import { Product } from '../../../../types/Product';

import * as Styled from './ProductItem.styled';
import SquareImage from '../../../commons/SquareImage/SquareImage';
import ProductStepper from '../ProductStepper/ProductStepper';

interface ProductItemProps {
  product: Product;
}

const ProductItem = (props: ProductItemProps) => {
  const { product: thisProduct } = props;
  const { id, name, price, imageUrl } = thisProduct;

  return (
    <Styled.ProductItem>
      <SquareImage src={imageUrl} alt={name} size="xl" />
      <Styled.ProductDetailDiv>
        <div>
          <Styled.NameParagraph>{name}</Styled.NameParagraph>
          <Styled.PriceParagraph>{price.toLocaleString('ko-KR')} 원</Styled.PriceParagraph>
        </div>
        <ProductStepper productId={id} />
      </Styled.ProductDetailDiv>
    </Styled.ProductItem>
  );
};

export default ProductItem;
