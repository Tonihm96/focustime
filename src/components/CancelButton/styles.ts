import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const CancelIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
`;
