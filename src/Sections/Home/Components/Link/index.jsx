import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

/**
 * CustomLink
 * @param {Object} param0 wdawdaw
 * @param {('default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success')} param0.color สี
 * @returns 
 */
 function CustomLink({
  theme,
  color = "inherit"
}) {

  let cssColor = {};
  if (color === "default") {

  }
  else if (color === "inherit") {
    cssColor = { color: "inherit" }
  }
  else {
    cssColor = { color: theme.palette[color].main }
  }

  const css = {
    cursor: "pointer",
    ...cssColor,
    textDecoration: "none",
    '&:visited': {
      ...cssColor,
    },
  }
  return css
}

const Link = styled(RouterLink)(CustomLink);

export default Link;