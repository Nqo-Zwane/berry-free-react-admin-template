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

const clients = {
    id: 'clients',
    title: 'Manage your customers',
    type: 'group',
    children: [
        {
          id: 'default',
          title: 'Clients',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons.IconTypography,
          breadcrumbs: false
        },
    ]
};

export default clients;