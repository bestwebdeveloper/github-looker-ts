import styled from 'styled-components/macro';

export const ErrorText = styled.span`
  bottom: 0;
  color: #ff0000;
  font-size: 0.8rem;
  line-height: 2rem;
  position: absolute;
`;

export const Form = styled.form`
  border: 2px solid ${p => p.theme.border};
  border-radius: 8px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 1rem 0;
  overflow: hidden;
  padding: 1rem 2rem 2rem;
  position: relative;
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
`;

export const LoadingIndicatorWrapper = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const ReposList = styled.ul`
  margin: 0;
  padding: 0 1rem;
  overflow: scroll;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;
