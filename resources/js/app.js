import 'bootstrap';
import '@popperjs/core';

import DataTable from 'datatables.net-dt';

// document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#two-q-table', {order:[], responsive:true});
// });

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
