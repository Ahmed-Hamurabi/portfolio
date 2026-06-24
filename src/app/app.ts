import { Component, OnInit, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {

  experience: ExperienceItem[] = [
    {
      role: 'Frontend Developer (Angular)',
      company: 'Hardstone Enterprises',
      location: 'Lahore, Pakistan',
      period: '01',
      bullets: [
        'Developed and maintained responsive web applications using Angular, TypeScript, JavaScript, HTML5 & CSS3.',
        'Built reusable UI components to improve development efficiency and maintainability.',
        'Integrated REST APIs to enable seamless communication between frontend and backend systems.',
        'Collaborated with designers and backend developers to deliver scalable business applications.',
        'Contributed to the development of a Medical Billing Portal for healthcare operations.'
      ],
      tech: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'Git']
    },
    {
      role: 'E-Commerce Operations Associate',
      company: 'Alshaya Group',
      location: 'Sulebiya Road, Kuwait',
      period: '02',
      bullets: [
        'Managed customer orders, ensuring timely and accurate processing.',
        'Verified return requests in line with company policy.',
        'Maintained data accuracy across internal platforms.',
        'Provided technical support within the department when required.'
      ],
      tech: ['Internal Order Systems', 'Data Entry & QA', 'Technical Support']
    },
    {
      role: 'IT Teacher & Technical Support',
      company: 'Pakistan English Academy',
      location: 'Farwaniya, Kuwait',
      period: '03',
      bullets: [
        'Taught IT subjects to junior-grade students using practical, engaging methods.',
        'Diagnosed and resolved hardware, software, printer & basic network problems.',
        'Designed and developed a web-based Teacher Attendance Management System.',
        'Maintained the school\'s IT infrastructure and ensured smooth system operation.'
      ],
      tech: ['Windows Operating Systems', 'Hardware Troubleshooting', 'Technical Support']
    }
  ];

  skillGroups = [
    { label: 'Frontend Development', items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design'] },
    { label: 'Programming Languages', items: ['TypeScript', 'Python', 'C#', 'C++', 'JavaScript'] },
    { label: 'Databases', items: ['MySQL', 'SQL'] },
    { label: 'IT & Technical Skills', items: ['Software Installation & Configuration', 'Hardware Troubleshooting', 'Windows Operating Systems', 'Technical Support', 'Debugging'] },
    { label: 'Tools & Technologies', items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'REST APIs', 'JSON'] },
    { label: 'Soft Skills', items: ['Team Collaboration', 'Communication', 'Analytical Thinking', 'Time Management', 'Quick Learning'] }
  ];

  projects: ProjectItem[] = [
    {
      name: 'Teacher Attendance Management System (TAMS)',
      description: 'A web app to digitize teacher attendance and leave management — attendance tracking, leave requests, and administrative approvals, cutting down manual record-keeping.',
      tags: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Movie Review Mobile App',
      description: 'University final-year project: a mobile app for browsing and viewing movie reviews, built collaboratively.',
      tags: ['Mobile Development', 'UI Design']
    },
    {
      name: 'Medical Billing Portal',
      description: 'Built with a development team using Angular — responsive UI, backend API integration, and streamlined billing workflows.',
      tags: ['Angular', 'TypeScript', 'REST APIs', 'C#', 'Python', 'Git', 'Azure']
    }
  ];

constructor(
  private host: ElementRef<HTMLElement>,
  @Inject(PLATFORM_ID) private platformId: Object
) {}

  ngOnInit(): void {}

ngAfterViewInit(): void {
  // Exit immediately when rendering on the server
  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  const targets = this.host.nativeElement.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
}
