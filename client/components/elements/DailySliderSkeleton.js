import React from "react";
import ContentLoader from "react-content-loader";

function DailySliderSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={150}
      viewBox="0 0 800 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
      <rect x="340" y="20" rx="4" ry="4" width="450" height="50" />
      <rect x="340" y="70" rx="4" ry="4" width="450" height="30" />
      <rect x="340" y="100" rx="4" ry="4" width="450" height="20" />
      <rect x="340" y="140" rx="4" ry="4" width="450" height="30" />
      <rect x="340" y="190" rx="4" ry="4" width="450" height="20" />
      <rect x="340" y="220" rx="4" ry="4" width="450" height="20" />
    </ContentLoader>
  );
}

export default DailySliderSkeleton;
