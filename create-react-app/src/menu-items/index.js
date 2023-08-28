import dashboard from './dashboard';
import finances from './finances';
import company_profile from './company_profile';
import employees from './employees';
import inventory from './inventory';
import suppliers from './suppliers';
import clients from './clients';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, finances, inventory, clients, employees, suppliers, company_profile]
};

export default menuItems;
