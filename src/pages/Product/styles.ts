import styled, { css } from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 15px;
  border: 0px solid #666;
  position: relative;

  button {
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    display: flex;
    place-content: center;

    svg {
      font-size: 20px;
    }
  }

  > a {
    position: absolute;
    left: 20px;
    top: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 0;
    color: #343434;
  }
`;

export const SingleProduct = styled.div`
  border: 0px solid #666;
  background: #fff;
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;

  h2 {
    color: #666;
    font-weight: 700;
    text-align: left;
  }

  h3 {
    color: #ccc;
    font-weight: 700;
    text-align: left;
    font-size: 14px;
    float: flex-start;
    align-content: flex-start;
  }

  img {
    width: 70%;
    margin: 20px 30px;
    border-radius: 10px;
    max-width: 300px;
    border: 2px solid #ccc;
  }

  > span {
    color: #343434;
    text-align: center;
    background: #fff;
    padding: 3px 5px;
    border-right: 0px solid #e6e6e6;

    > span {
      font-size: 25px;
      font-weight: 700;
      margin-left: 5px;
    }
  }

  section {
    font-size: 11px;
    color: #666;
    text-align: justify;
    margin-top: 15px;
    line-height: 15px;
  }
`;

interface ImgProps {
  link: string;
}

export const Img = styled.div<ImgProps>`
  width: 80%;
  max-width: 300px;
  max-height: 300px;
  min-height: 180px;
  margin-top: 10px;
  ${props =>
    props.link &&
    css`
      background: url(${props.link});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

interface ButtonProps {
  active: boolean;
}
export const Button = styled.button<ButtonProps>`
  height: 50px;
  margin-top: 200px;
  ${props =>
    !props.active &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `}
`;
