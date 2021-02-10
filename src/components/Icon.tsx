import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { faBan, faRedo, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBan, faRedo, faShareAlt);

type IconProps = FontAwesomeIconProps;
export default function Icon(props: IconProps) {
  return <FontAwesomeIcon {...props} />;
}
