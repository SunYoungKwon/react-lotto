import styled from 'styled-components';

export const WinningNumberFormContainer = styled.section`
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
  }

  ul {
    display: flex;
    margin-bottom: 0.5rem;

    li {
      margin-right: 0.7rem;
    }

    li:last-child {
      margin-right: 0;
    }
  }
`;

export const NumbersContainer = styled.section``;
export const BonusNumberContainer = styled.section``;
export const WinningNumberInputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${NumbersContainer} {
    margin: 0 auto;
  }

  ${BonusNumberContainer} {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CheckMessageContainer = styled.div`
  font-size: 0.9rem;
  margin-left: 1rem;
  color: ${({ isCompletedInput }) => (isCompletedInput ? 'green' : 'red')};
`;

export const WinningNumberSubmitButton = styled.button`
  font-size: 1rem;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 5px;
  margin-top: 1.5rem;
  background-color: var(--color-pink-1);

  &:disabled {
    background-color: #bbb;
    color: #555;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: #bbb;
  }

  &:hover {
    background-color: var(--color-pink-3);
  }
`;