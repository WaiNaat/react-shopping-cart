import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Header = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;

  padding: 10px 100px;

  background-color: ${Colors.PRIMARY_COLOR_DARK};
  color: ${Colors.FONT_WHITE};

  @media screen and (max-width: 650px) {
    padding: 10px 50px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 28px;
`;

export const TitleHeading = styled.h1`
  display: flex;

  width: 145px;
  height: 57px;

  text-align: center;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;

  line-height: 58px;

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;
