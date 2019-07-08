import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container } from './commonStyles';

const HeroContainer = styled.section`
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroGrid = styled.div`
  display: flex;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

const HeroColumn = styled.div`
  flex: 1;
  padding: 4rem 0 4rem 2rem;
  align-self: center;
  @media (max-width: 575.98px) {
    padding: 1rem 0 0;
  }
`;

const HeroColumnImage = styled(HeroColumn)`
  padding-left: 0;
`;

const Hero = ({ image }) => (
  <HeroContainer>
    <Container>
      <HeroGrid>
        <HeroColumnImage>
          <img src={image} alt="Param at Desk" />
        </HeroColumnImage>
        <HeroColumn>
          <h3>{`Hi, I'm Param 👋`}</h3>
          <p>
            I help people to learn web and mobile technologies through
            workshops, webinars and courses.
          </p>
          <p>
            I prefer teaching through practical examples and encourage everyone
            to learn by doing.
          </p>
        </HeroColumn>
      </HeroGrid>
    </Container>
  </HeroContainer>
);

Hero.propTypes = {
  image: PropTypes.any,
};

export default Hero;
