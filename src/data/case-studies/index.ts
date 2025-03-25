import { utep } from './utep';
import { ohioStateLacrosse } from './ohio-state-lacrosse';
import { pennState } from './penn-state';
import { kentState } from './kent-state';
import { illinoisState } from './illinois-state';
import { westVirginia } from './west-virginia';
import { louisville } from './louisville';
import { iowaState } from './iowa-state';
import { pitt } from './pitt';

export const caseStudies = {
  'utep': utep,
  'ohio-state-lacrosse': ohioStateLacrosse,
  'penn-state': pennState,
  'kent-state': kentState,
  'illinois-state': illinoisState,
  'west-virginia': westVirginia,
  'louisville': louisville,
  'iowa-state': iowaState,
  'pitt': pitt,
};

export type { CaseStudyData } from './types';
export { schoolColors } from '../schoolColors';