import styled from "styled-components";

// export const ThisDayInfoWrapper = styled.div`
//   width: 100%;
//   max-width: 450px;
//   min-height: 350px;
//   padding: 30px;
//   background: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(20px);
//   border-radius: 25px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 30px;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//     > div {
//     display: grid;
//     grid-template-rows: repeat(4, 1fr);
//     align-items: center;
//     padding: 10px;
//     gap: 15px;
//     color: white;
//     h2 {
//       font-weight: 600;
//       font-size: 18px;
//       margin: 0;
//       text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//     }
//   }
//   > div:nth-child(3) {
//     flex: 1;
//     p {
//       font-weight: 400;
//       font-size: 16px;
//       color: rgba(255, 255, 255, 0.9);
//       margin: 0;
//       line-height: 1.4;
//     }
//   }
// `
// export const ImgWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50px;
//   height: 50px;
//   border-radius: 15px;
//   padding: 8px;
//   background: rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;
//   img {
//     width: 30px;
//     height: 30px;
//     filter: brightness(0) invert(1);
//   }
// `;

export const ThisDayInfoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .info-row {
    display: grid;
    grid-template-columns: 50px 1fr 1.5fr;
    align-items: center;
    gap: 20px;
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      margin: 0;
    }
    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  img {
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
  }
`;