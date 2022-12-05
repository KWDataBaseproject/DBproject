/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ComponentLayOut = css`
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const PageNumber = css`
  display: flex;
  justify-content: center;
  font-size: 13px;
  margin-top: 10px;
  width: 10%;
  height: 100%;
  line-height: 26px;
  text-align: center;
  &:hover {
    background: #e0e0e0;
    transform: translateY(0px);
    transition: 0.3s;
  }
`;

function NewsPagination() {
  return (
    <div css={ComponentLayOut}>
      <div css={PageNumber}>1</div>
      <div css={PageNumber}>2</div>
      <div css={PageNumber}>3</div>
      <div css={PageNumber}>4</div>
      <div css={PageNumber}>5</div>
    </div>
  );
}

export default NewsPagination;
