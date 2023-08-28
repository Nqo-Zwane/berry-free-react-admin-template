// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| suppliers ||============================== //

const suppliers = {
    id: 'suppliers',
    title: 'suppliers',
    type: 'group',
    children: [
        {
          id: 'default',
          title: 'View Suppliers',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons.IconTypography,
          breadcrumbs: false
        },
    ]

};

export default suppliers;