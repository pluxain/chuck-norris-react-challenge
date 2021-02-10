import React from 'react';
import Icon, { IconProps } from 'components/Icon';

type LoadingIndicatorProps = {
  size?: IconProps['size'];
};
export default function LoadingIndicator({ size }: LoadingIndicatorProps) {
  return (
    <div className="flex items-center justify-center m-2">
      <Icon icon="circle-notch" size={size} spin />
    </div>
  );
}
