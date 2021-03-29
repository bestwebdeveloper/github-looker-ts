import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  color: ${p => p.theme.text};
  min-height: 2.75rem;
  padding: 0 2rem;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  margin: 1rem 10% 1rem 10%;
  width: 80%;
`;

export const Name = styled.div`
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
`;

export const StarCount = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-width: 6rem;

  .icon {
    margin-right: 0.125rem;
  }
`;
