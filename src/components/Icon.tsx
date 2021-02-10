import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import {
  faBan,
  faCircleNotch,
  faQuestionCircle,
  faRedo,
  faShareAlt,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faBan,
  faCircleNotch,
  faQuestionCircle,
  faRedo,
  faShareAlt,
  faTimesCircle
);

export type IconProps = FontAwesomeIconProps;
export default function Icon(props: IconProps) {
  return <FontAwesomeIcon {...props} />;
}
