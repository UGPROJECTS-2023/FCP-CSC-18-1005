import Home from "../../pages/Home";
import Collected from "../../pages/admin/collected";
import Dashboard from "../../pages/admin/dashboard";
import Department from "../../pages/admin/department";
import Faculty from "../../pages/admin/faculty";
import Payment from "../../pages/admin/payments";
import Production from "../../pages/admin/production";
import Report from "../../pages/admin/report";
import Students from "../../pages/admin/students";
import Users from "../../pages/admin/users";



let routes = [
  {
    path: `/`,
    component: Home,
    protected: true
  },
  {
    path: `/dashboard`,
    component: Dashboard,
    protected: true
  },
  {
    path: `/users`,
    component: Users,
    protected: true
  },
  {
    path: `/level`,
    component: Users,
    protected: true
  },
  {
    path: `/faculty/:id`,
    component: Faculty,
    protected: true
  },
  {
    path: `/students`,
    component: Students,
    protected: true
  },
  {
    path: `/reports`,
    component: Report,
    protected: true
  },
  {
    path: `/payments`,
    component: Payment,
    protected: true
  },
  {
    path: `/production`,
    component: Production,
    protected: true
  },
  {
    path: `/collected`,
    component: Collected,
    protected: true
  },
  {
    path: `/department`,
    component:Department,
    protected: true
  },
  
];

export default routes;
