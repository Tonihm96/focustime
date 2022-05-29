import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-top: ${({ theme }) => theme.sizes.xl}px;
  padding-bottom: ${({ theme }) => theme.sizes.xl}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TimerButtonsContainer = styled.View`
  padding-top: ${({ theme }) => theme.sizes.xxxl / 1.25}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
