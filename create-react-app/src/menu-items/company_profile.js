// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| Company Profile MENU ITEMS ||============================== //

const company_profile = {
    id: 'company_profile',
    title: 'Company Profile',
    type: 'group',
    children: [
        {
          id: 'default',
          title: 'View Profile',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons.IconTypography,
          breadcrumbs: false
        },
    ]


};

export default company_profile;