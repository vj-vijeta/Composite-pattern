import { SoftwareEngineer } from './SoftwareEngineer';
import { QAEngineer} from './Q&AEngineer';
import { UiEngineer } from './UiEngineer';
import { Advertisers } from './Advertisers';
import { DevDepartment } from './DevDepartment';
import { MarkDepartment } from './MarkDepartment';
import { Manager } from './Manager';
import { HrDepartment } from './HrDepartment';

// Client code
const dev1 = new SoftwareEngineer('John', 65000);
const qa1 = new QAEngineer('Jane', 65000);
const ui1 = new UiEngineer('Jeen', 65000);

const headOfDev = new DevDepartment('Development');
headOfDev.addEmployee(dev1);
headOfDev.showDetails();


//const headOfTest = new DevDepartment('Testing');
headOfDev.addEmployee(qa1);
//headOfTest.showDetails();

//const headOfUI = new DevDepartment('User Interface');
headOfDev.addEmployee(ui1);
//headOfUI.showDetails();


const ad1 = new Advertisers('John', 60000);

const headOfAdv =new MarkDepartment("Advertising");
headOfAdv.addEmployee(ad1);
headOfAdv.showDetails();

const manager = new Manager('IT Management');
manager.addEmployee(headOfDev);
manager.showDetails();

const hrDept = new HrDepartment('Human Resources');

const hrEmployee = new SoftwareEngineer('HR Employee', 55000);
hrDept.addEmployee(hrEmployee);

