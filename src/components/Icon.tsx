import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import {
  faBan,
  faQuestionCircle,
  faRedo,
  faShareAlt,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBan, faQuestionCircle, faRedo, faShareAlt, faTimesCircle);

type IconProps = FontAwesomeIconProps;
export default function Icon(props: IconProps) {
  return <FontAwesomeIcon {...props} />;
}
