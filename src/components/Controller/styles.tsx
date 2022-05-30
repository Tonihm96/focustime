import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: ${({ theme }) => theme.sizes.xl}px;
  padding-bottom: ${({ theme }) => theme.sizes.xl}px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TimerButtonsContainer = styled.View`
  padding-top: ${({ theme }) => theme.sizes.xxl}px;
  padding-bottom: ${({ theme }) => theme.sizes.xxl}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
