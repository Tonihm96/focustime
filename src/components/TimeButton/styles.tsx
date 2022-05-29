import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border: ${({ theme }) => theme.sizes.xxl / 7}px
    ${({ theme }) => theme.colors.primary};
  border-radius: 500px;
  padding: ${({ theme }) => theme.sizes.xxxl / 1.5}px;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.xxl}px;
  font-weight: bold;
`;
