import styled from 'styled-components';

// flex: 1; height: 100%;
export const Pane = styled.div`
  background: var(--gradient);
  display: flex;

  flex-direction: column;

  overflow: hidden;
  background: var(--gradient);
`;

export const CenterPane = styled(Pane)`
  overflow: auto;
  display: block;
`;

export const ConfigureBasePane = styled(Pane)`
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: transparent;
  pointer-events: none;
  z-index: 3;
`;
