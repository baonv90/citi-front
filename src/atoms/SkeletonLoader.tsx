import styled, { css, keyframes } from 'styled-components';

const gradientKeyFrames = keyframes`
  0% {
    background-position: 100% - 100%;
  }

  100% {
    background-position: -100%;
  }
`;

const skeletonLoaderCss = css`
  background:
    linear-gradient(
      90deg,
      var(--skeleton-color-1),
      var(--skeleton-color-2),
      var(--skeleton-color-3)
    );
  animation: ${gradientKeyFrames} 1s ease-in infinite;
  background-size: 200% 200%;
  border-radius: 3px;
  opacity: .15
`; 

// skeleton component for loading
export const SkeletonLoader = styled.div`
  ${skeletonLoaderCss}
`;
