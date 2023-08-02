import React from 'react';
import ContentLoader from 'react-content-loader';

function Cat1TabSkeleton() {
  return (
    <ContentLoader
      speed={3}
      width={300}
      height={460}
      viewBox="0 0 300 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="300" height="200" />
      <rect x="20" y="220" rx="5" ry="5" width="260" height="20" />
      <rect x="20" y="250" rx="5" ry="5" width="260" height="20" />
      <rect x="20" y="280" rx="5" ry="5" width="260" height="20" />
      <rect x="20" y="310" rx="5" ry="5" width="260" height="20" />
      <rect x="20" y="340" rx="5" ry="5" width="260" height="20" />
      <rect x="20" y="370" rx="5" ry="5" width="260" height="20" />
      <rect x="20" y="400" rx="5" ry="5" width="260" height="20" />
    </ContentLoader>
  );
}

export default Cat1TabSkeleton;