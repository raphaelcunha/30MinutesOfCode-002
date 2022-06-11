import React from "react";
import Skeleton from "~/components/Skeleton";

type TTextSkeletonProps = {
  isData: boolean;
  text: string;
  width?: number;
  height?: number;
};

const TextSkeleton = ({ isData, text, width, height }: TTextSkeletonProps) => {
  if (isData) {
    return <span>{text}</span>;
  }

  return <Skeleton width={width} height={height} />;
};

TextSkeleton.defaultProps = {
  width: 122,
  height: 15,
};

export default TextSkeleton;
