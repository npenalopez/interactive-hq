import colleagues from "../colleagues.json";

export interface option {
    value: string;
    label: string;
}

export interface optionGroup {
    label: string;
    options: Array<option>
}

export const normalizeText = (text:string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const getColleaguesGroup = (department:string) => {
    const optionGroup:Array<option> = [];

    colleagues.filter(colleague => colleague.department === department).forEach(colleague =>
        optionGroup.push({value: colleague.id, label:colleague.name})
    );
    return optionGroup;
}

export const options:Array<optionGroup> = [];

const departments = [
    'Executive Board',
    'CEO Staff',
    'Finance, Accounting & Controlling',
    'Human Resources',
    'Sales',
    'Marketing & Sales Operations',
    'Signalling Engineering',
    'IP Engineering',
    'ICT Engineering',
    'Products',
    'Clearing Operations',
    'Clearing Operations - Back Office',
    'Hubbing Operations',
    'Network Operation Centre',
    'Software Development',
    'Service Delivery'
];

// build options array containing colleagues grouped by department
departments.forEach(department => options.push({ label: department, options: getColleaguesGroup(department)}));