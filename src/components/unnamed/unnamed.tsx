import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './unnamed.module.css';

interface Props {
  className?: string;
}
/* @figmaId 22:4008 */
export const unnamed: FC<Props> = memo(function unnamed(props = {}) {
  return <div className={`${resets.storybrainResets} ${classes.root}`}></div>;
});
