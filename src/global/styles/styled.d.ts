import 'styled-components';
import theme from './theme';

// Usa o DefaultTheme do styled-components e extende com o tipo do tema
//
// { ...DefaultTheme, ThemeType: object }
//
// interface DefaultTheme
//
// This interface can be augmented by users to add types to styled-components'
// default theme without needing to reexport ThemedStyledComponentsModule.

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
