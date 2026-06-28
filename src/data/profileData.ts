import { WorkExperience, SkillCategory, Certification, Achievement, LinkedInStat } from '../types';

export const PROFILE = {
  name: 'Vaibhav Patel',
  role: 'Senior IT Executive / Microsoft 365 / Azure AD / Intune / AVD / Network & Security / IT Infrastructure Specialist',
  tagline: 'Building secure, reliable, and high-performance IT environments that power business continuity.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'v.d.patel26994@gmail.com',
  phone: '+91 85113 32826',
  linkedIn: 'https://www.linkedin.com/in/vaibhav-patel-b14267227/',
  github: 'https://github.com/vaibhav2694p',
  blog: 'https://vaibhavpatel260994.blogspot.com/',
  avatar: 'https://avatars.githubusercontent.com/u/128694189?v=4',
  resume: '/Vaibhav_Patel_CV.pdf',
  bio: 'Results-driven Senior IT Executive with 10+ years of progressive experience leading enterprise IT infrastructure, Microsoft 365 administration, cloud operations, cybersecurity, and end-user computing environments. Proven track record of managing business-critical IT systems, improving operational efficiency, strengthening security posture, and delivering high-availability technology solutions.',
  dob: '27-08-1994',
  nationality: 'Indian',
  maritalStatus: 'Married',
  languages: ['Hindi', 'Gujarati', 'English'],
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Safebooks Global Pvt. Ltd.',
    role: 'Senior IT Executive',
    period: 'March 2023 – Present',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Manage enterprise IT infrastructure and cloud operations supporting 100+ users across multiple business units.',
      'Maintain 99.9% system uptime through proactive monitoring, preventive maintenance, and infrastructure optimization.',
      'Successfully administer Microsoft 365, Azure, Intune, Exchange Online, and Azure Virtual Desktop environments.',
      'Strengthened organizational cybersecurity through endpoint protection, security monitoring, compliance enforcement, and access control management.',
      'Manage and monitor 15+ business domains, cloud services, backup systems, and critical infrastructure.',
      'Improved business continuity through implementation and management of backup and disaster recovery strategies.',
      'Lead L1, L2, and L3 support operations while ensuring high service standards.',
    ],
  },
  {
    company: 'L. C. Institute of Technology',
    role: 'IT Administrator',
    period: 'March 2022 – March 2023',
    location: 'Bhandu, Gujarat, India',
    achievements: [
      'Managed campus-wide IT infrastructure, networking, security systems, and endpoint devices.',
      'Administered Sophos Firewall, Google Workspace, and IT asset management processes.',
      'Improved system reliability through proactive troubleshooting and maintenance initiatives.',
      'Delivered technical support and infrastructure services across academic and administrative departments.',
    ],
  },
  {
    company: 'Meditab India',
    role: 'IT Asset Coordinator',
    period: 'April 2021 – March 2022',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Managed enterprise IT asset lifecycle, procurement, deployment, and inventory control.',
      'Supported Active Directory administration, endpoint management, and service desk operations.',
      'Reduced equipment downtime through effective troubleshooting and preventive maintenance.',
      'Coordinated IT support activities while ensuring operational continuity.',
    ],
  },
  {
    company: 'Electrotherm (India) Limited',
    role: 'IT Engineer',
    period: 'April 2018 – April 2021',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Supported enterprise infrastructure, end-user computing, and IT service operations.',
      'Managed hardware deployment, software installation, asset management, and technical support.',
      'Contributed to improved IT service delivery and operational efficiency.',
    ],
  },
  {
    company: 'YOU Broadband India Ltd.',
    role: 'Network Engineer',
    period: 'February 2017 – March 2018',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Managed network operations, connectivity troubleshooting, and customer support escalations.',
      'Ensured reliable network performance and timely issue resolution.',
    ],
  },
  {
    company: 'Patel Infotech',
    role: 'IT Executive',
    period: 'January 2012 – February 2017',
    location: 'Patan, Gujarat, India',
    achievements: [
      'Delivered IT infrastructure support, hardware solutions, CCTV deployment, and asset management services.',
      'Built a strong foundation in networking, system administration, troubleshooting, and customer service.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Cloud & Microsoft Technologies',
    skills: [
      'Microsoft 365',
      'Exchange Online',
      'SharePoint Online',
      'Teams',
      'OneDrive',
      'Azure',
      'Entra ID (Azure AD)',
      'Microsoft Intune',
      'Azure Virtual Desktop',
      'Google Workspace',
    ],
  },
  {
    category: 'Infrastructure & Systems',
    skills: [
      'Windows Server',
      'Active Directory',
      'Group Policy',
      'Endpoint Management',
      'Server Administration',
      'Virtualization',
      'IT Operations',
      'Linux (Ubuntu 18/20/22)',
    ],
  },
  {
    category: 'Security & Networking',
    skills: [
      'Cybersecurity',
      'Identity & Access Management',
      'Conditional Access',
      'Endpoint Security',
      'Security Monitoring',
      'Compliance Management',
      'LAN/WAN',
      'DNS',
      'DHCP',
      'VPN',
      'Firewall Management',
      'Sophos Firewall',
      'Network Troubleshooting',
    ],
  },
  {
    category: 'Hardware & Support',
    skills: [
      'Computer Hardware Repair',
      'CCTV Installation & Service',
      'Biometric Systems',
      'Electronic Troubleshooting',
      'Software Installation',
      'Windows 10/11',
      'MS Office',
      'Printer Management',
      'Wireless Devices',
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      'AI Automation',
      'ChatGPT Solutions',
      'Claude AI',
      'AI Agents',
      'Prompt Engineering',
      'Workflow Automation',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Domestic Data Entry Operator – Hindi', issuer: 'Skill India', year: '2018' },
  { name: 'Computer Literacy for Windows 10', issuer: 'Microsoft', year: '2020' },
  { name: 'Computer Literacy for Mac', issuer: 'Apple', year: '2020' },
  { name: 'CompTIA A+ Core Hardware', issuer: 'CompTIA', year: '2020' },
  { name: 'CompTIA Network+ Understanding Networks', issuer: 'CompTIA', year: '2021' },
  { name: 'CompTIA Network+ Physical Network', issuer: 'CompTIA', year: '2021' },
  { name: 'CompTIA Network+ Advanced IP Networking', issuer: 'CompTIA', year: '2021' },
  { name: 'CompTIA Network+ Wireless, Virtual, Cloud, and Mobile Networking', issuer: 'CompTIA', year: '2021' },
  { name: 'Career Essentials in System Administration by Microsoft and LinkedIn', issuer: 'Microsoft & LinkedIn', year: '2023' },
  { name: 'Advanced Windows 11 for Local Administrators', issuer: 'Microsoft', year: '2024' },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '99.9% Uptime',
    description: 'Maintained 99.9% system availability across enterprise infrastructure through proactive monitoring and preventive maintenance.',
    icon: 'FaServer',
  },
  {
    title: '100+ Users Managed',
    description: 'Successfully managing IT infrastructure and cloud operations supporting 100+ users across multiple business units.',
    icon: 'FaUsers',
  },
  {
    title: '15+ Domains',
    description: 'Successfully managing and monitoring 15+ business domains, cloud services, and critical infrastructure environments.',
    icon: 'FaGlobe',
  },
  {
    title: 'Zero Downtime DR',
    description: 'Implemented secure backup and disaster recovery systems ensuring business continuity with zero data loss events.',
    icon: 'FaShieldAlt',
  },
  {
    title: 'Cybersecurity Excellence',
    description: 'Strengthened IT security through proactive monitoring, endpoint protection, compliance enforcement, and access control.',
    icon: 'FaLock',
  },
  {
    title: '10+ Years Experience',
    description: 'Over a decade of hands-on experience across IT infrastructure, cloud, networking, security, and enterprise operations.',
    icon: 'FaAward',
  },
];

export const LINKEDIN_STATS: LinkedInStat[] = [
  { label: 'Years Experience', value: '10+', icon: 'FaBriefcase' },
  { label: 'Companies Worked', value: '6', icon: 'FaBuilding' },
  { label: 'Certifications', value: '10', icon: 'FaCertificate' },
  { label: 'Domains Managed', value: '15+', icon: 'FaGlobe' },
  { label: 'Users Supported', value: '100+', icon: 'FaUsers' },
  { label: 'Uptime Maintained', value: '99.9%', icon: 'FaServer' },
];
