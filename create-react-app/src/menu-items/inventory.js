// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| Inventory ||============================== //

const inventory = {
    id: 'inventory',
    title: 'Inventory',
    type: 'group',
    children: [
        {
          id: 'default',
          title: 'View Inventory',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons.IconTypography,
          breadcrumbs: false
        },
    ]

};

export default inventory;