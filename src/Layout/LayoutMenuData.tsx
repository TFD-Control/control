import { Award, CalendarDays, CircuitBoard, Codesandbox, FileText, LifeBuoy, LocateFixed, Mail, Map, MessageSquare, MonitorDot, PackagePlus, PictureInPicture2, PieChart, RadioTower, ScrollText, Share2, ShoppingBag, Table, Trophy, UserRound, Users2Icon } from "lucide-react";

interface MenuItem {
    id?: string;
    label: string;
    link?: string;
    icon?: JSX.Element;
    parentId?: string | number;
    roles?: string[];
    subItems?: MenuItem[];
    isTitle?: boolean;
}

const menuData: MenuItem[] = [
    {
        label: 'menu',
        isTitle: true,
        roles: ['admin', 'user']
    },
    {
        id: "dashboard",
        label: 'Dashboards',
        link: "/dashboard",
        icon: <MonitorDot />,
        parentId: 2,
        roles: ['admin']
        
    },
    {
        id: 'account',
        label: 'Account',
        link: '/pages-account',
        icon: <UserRound />,
        parentId: 2,
        roles: ['admin', 'user']
    },


    {
        label: 'Apps',
        isTitle: true,
        roles: ['admin', 'user']
    },
    {
        id: 'notes',
        label: 'Notes',
        icon: <ScrollText />,
        link: '/apps-notes',
        parentId: 2,
        roles: ['admin', 'user']
    },
    {
        id: 'users',
        label: 'Users',
        icon: <Users2Icon />,
        link: '/apps-users-grid',
        parentId: 2,
        roles: ['admin', 'user']
    },
    {
        id: "hr-management",
        label: 'HR Management',
        icon: <CircuitBoard />,
        parentId: "hrmanagement",
        link: "/#",
        subItems: [
            {
                id: 'employeelist',
                label: 'Employee List',
                link: '/apps-hr-employee',
                parentId: 'hrmanagement',
                
            },
            {
                id: 'holiday',
                label: 'Holidays',
                link: '/apps-hr-holidays',
                parentId: 'hrmanagement'
            },
            {
                id: 'leavesmanage',
                label: 'Leaves Manage',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'byemployee',
                        label: 'By Employee',
                        link: '/apps-hr-leave-employee',
                        parentId: 'leavesmanage'
                    },
                    {
                        id: 'addleaveemployee',
                        label: 'Add Leave (Employee)',
                        link: '/apps-hr-create-leave-employee',
                        parentId: 'leavesmanage'
                    },
                    {
                        id: 'byhr',
                        label: 'By HR',
                        link: '/apps-hr-leave',
                        parentId: 'leavesmanage'
                    },
                    {
                        id: 'addleavehr',
                        label: 'Add Leave (HR)',
                        link: '/apps-hr-create-leave',
                        parentId: 'leavesmanage'
                    },
                ]
            },
            {
                id: 'attendance',
                label: 'Attendance',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'attendancehr',
                        label: 'Attendance (HR)',
                        link: '/apps-hr-attendance',
                        parentId: 'attendance'
                    },
                    {
                        id: 'mainattendance',
                        label: 'Main Attendance',
                        link: '/apps-hr-attendance-main',
                        parentId: 'attendance'
                    },
                ]
            },
            {
                id: 'department',
                label: 'Department',
                link: '/apps-hr-department',
                parentId: 'hrmanagement'
            },
            {
                id: 'sale',
                label: 'Sales',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'estimates',
                        label: 'Estimates',
                        link: '/apps-hr-sales-estimates',
                        parentId: 'sale'
                    },
                    {
                        id: 'payments',
                        label: 'Payments',
                        link: '/apps-hr-sales-payments',
                        parentId: 'sale'
                    },
                    {
                        id: 'expenses',
                        label: 'Expenses',
                        link: '/apps-hr-sales-expenses',
                        parentId: 'sale'
                    },
                ]
            },
            {
                id: 'payroll',
                label: 'Payroll',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'employeesalary',
                        label: 'Employee Salary',
                        link: '/apps-hr-payroll-employee-salary',
                        parentId: 'payroll'
                    },
                    {
                        id: 'payslip',
                        label: 'Payslip',
                        link: '/apps-hr-payroll-payslip',
                        parentId: 'payroll'
                    },
                    {
                        id: 'createpayslip',
                        label: 'Create Payslip',
                        link: '/apps-hr-payroll-create-payslip',
                        parentId: 'payroll'
                    },
                ]
            },
        ],
        roles: ['admin']
    },
    {
        id: 'invoice',
        label: 'Invoices',
        icon: <FileText />,
        parentId: 2,
        roles: ['admin'],
        subItems: [
            {
                id: 'invoicelistview',
                label: 'Listview',
                link: '/apps-invoice-list',
                parentId: 'invoice'
            },
            {
                id: 'invoiceaddnew',
                label: 'Add New',
                link: '/apps-invoice-add-new',
                parentId: 'invoice'
            },
            {
                id: 'invoiceoverview',
                label: 'Overview',
                link: '/apps-invoice-overview',
                parentId: 'invoice'
            }
        ]
    },


];

export { menuData };