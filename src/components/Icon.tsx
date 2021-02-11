import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import {
  faBan,
  faCircleNotch,
  faPaperPlane,
  faPlus,
  faQuestionCircle,
  faRedo,
  faSave,
  faShareAlt,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faBan,
  faCircleNotch,
  faQuestionCircle,
  faPaperPlane,
  faPlus,
  faRedo,
  faSave,
  faShareAlt,
  faTimes,
  faTimesCircle
);

export type IconProps = FontAwesomeIconProps;
export default function Icon(props: IconProps) {
  return <FontAwesomeIcon {...props} />;
}
