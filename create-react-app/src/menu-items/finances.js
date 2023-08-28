// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const finances = {
  id: 'finances',
  title: 'Finances',
  type: 'group',
  children: [
    {
      id: 'invoices',
      title: 'Invoices',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'create-invoice',
          title: 'Create an invoice',
          type: 'item',
          url: 'invoices/create-invoice',
          breadcrumb: false
        },
        {
          id: 'view_invoices',
          title: 'Look at my invoices',
          type: 'item',
          url: '/dashboard/default',
          breadcrumb: false
        }
        
      ],
  
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'collapse',
      icon: icons.IconKey,

    },
    {
      id: 'financial_reports',
      title: 'Reports',
      type: 'collapse',
      icon: icons.IconKey,

    },
  ]
};

export default finances;
