import type { PaletteMode, ThemeOptions } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import {
  dataDisplayCustomizations,
  feedbackCustomizations,
  inputsCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
} from './customizations';
import { getDesignTokens } from './themePrimitives';

export default function getBlogTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  };
}
