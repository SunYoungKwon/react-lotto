import styled from 'styled-components';

export const ResultModalContainer = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;

  .modal-inner {
    width: 500px;
    max-height: 80vh;
    margin: auto;
    padding: 4rem 3rem;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    position: relative;
    text-align: center;
    white-space: nowrap;

    .modal-close {
      margin: 25px;
      width: 25px;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
      border: 0;
      background-color: transparent;
      padding: 0;

      .close-x {
        stroke: gray;
        fill: transparent;
        stroke-linecap: round;
        stroke-width: 5;
      }
    }

    table {
      margin: 0 auto 2rem auto;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid #999;

        th,
        td {
          padding: 0.7rem 1.5rem;
        }
      }

      thead > tr {
        border-bottom: 2px solid #666;
      }
    }

    .rate-of-return-message {
      margin-bottom: 1.5rem;
      font-weight: 500;
      font-size: 1.2rem;
    }

    .restart-btn {
      width: 100%;
      height: 50px;
      border: 0;
      border-radius: 5px;
      background-color: var(--color-pink-1);
      font-size: 1rem;

      &:hover {
        background-color: var(--color-pink-3);
      }
    }
  }
`;