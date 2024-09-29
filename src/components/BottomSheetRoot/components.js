import LegalFormSheet from '@components/bottomSheets/LegalFormSheet';
import EmploymentSheet from '@components/bottomSheets/EmploymentSheet';
import SelfEmploymentSheet from '@components/bottomSheets/SelfEmploymentSheet';
import CheckingRequisites from '@components/bottomSheets/CheckingRequisites';
import MapApps from '@components/bottomSheets/MapApps';

const SHEET_COMPONENTS = {
  LEGAL_FORM: LegalFormSheet,
  EMPLOYMENT: EmploymentSheet,
  CHECKING_REQUISITES: CheckingRequisites,
  SELF_EMPLOYMENT: SelfEmploymentSheet,
  MAP_APPS: MapApps,
};

export default SHEET_COMPONENTS;
