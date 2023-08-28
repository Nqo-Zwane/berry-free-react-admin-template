// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| employees MENU ITEMS ||============================== //

const employees = {
    id: 'employees',
    title: 'employees',
    type: 'group',
    children: [
        {
          id: 'default',
          title: 'View Employees',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons.IconTypography,
          breadcrumbs: false
        },
    ]


};

export default employees;