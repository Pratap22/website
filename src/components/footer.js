import React from 'react';
import styled from '@emotion/styled';
import { TextCenter } from '../components/commonStyles';

const FooterContainer = styled(TextCenter)`
  padding: 2rem;
  p {
    margin: 0;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>
      © Learn with Param. Made in <strong>Tallinn, Estonia</strong> {` ❤️`}
    </p>
  </FooterContainer>
);

export default Footer;
