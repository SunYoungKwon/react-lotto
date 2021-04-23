import styled from 'styled-components';

export const PriceFormContainer = styled.section`
  margin-bottom: 2rem;

  .price-form {
    display: flex;

    & > * {
      display: flex;
      flex-direction: column;
    }

    .price-label {
      flex-grow: 1;

      .price-text {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .price-input {
        height: 50px;
        font-size: 1rem;
        padding: 0 1rem;
        border: 1px solid #aaa;
        border-radius: 5px;
      }
    }

    .price-submit-btn-box {
      justify-content: flex-end;

      .price-submit-btn {
        height: 50px;
        padding: 0 1.5rem;
        margin-left: 15px;
        border: 0;
        border-radius: 5px;
        background-color: var(--color-pink-1);
        font-size: 1rem;

        &:hover {
          background-color: var(--color-pink-3);
        }
      }
    }
  }
`;