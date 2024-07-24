interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Providence Medical Clinic',
    description: `Redesigned the website for a non-profit organization that helps people in Northeast Tennessee that fall below the 150% poverty line to gain access to free healthcare. I provided solutions to ensure patients are getting the quality care they need before they walk into the office.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
