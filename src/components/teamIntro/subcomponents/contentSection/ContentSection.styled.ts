import { devices } from 'constants/theme'
import { styled } from 'styled-components'

export const ContentSectionContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .docs-text {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media screen and (${devices.lg}) {
    height: 100%;
    width: 200%;
    .docs-text {
      width: 105%;
      font-weight: 400;
      font-size: 1.1rem;
    }
  }
`
