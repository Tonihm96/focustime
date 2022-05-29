import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ClockText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.xxxl * 1.25};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
