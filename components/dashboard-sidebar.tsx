'use client';

import {
  Calendar,
  LucideLayoutDashboard,
  Search,
  Settings,
} from 'lucide-react';

import { Icon } from '@iconify/react';

import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

// Menu items with serializable icon identifiers.
const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'LucideLayoutDashboard',
  },
  {
    title: 'Startups',
    url: '/dashboard/startups',
    icon: 'ph:rocket-bold',
  },
  {
    title: 'Investors',
    url: '/dashboard/investors',
    icon: 'cil:clipboard',
  },
  {
    title: 'ScaleUp',
    url: '/dashboard/scaleup',
    icon: 'Search',
  },
  {
    title: 'Programs',
    url: '/dashboard/programs',
    icon: 'Settings',
  },
  {
    title: 'Calendar',
    url: '/dashboard/calendar',
    icon: 'Settings',
  },
  {
    title: 'Notifications',
    url: '/dashboard/notifications',
    icon: 'Settings',
  },
  {
    title: 'Documents',
    url: '/dashboard/documents',
    icon: 'Settings',
  },
];

function renderIcon(icon: string): JSX.Element {
  switch (icon) {
    case 'LucideLayoutDashboard':
      return <LucideLayoutDashboard />;
    case 'Calendar':
      return <Calendar />;
    case 'Search':
      return <Search />;
    case 'Settings':
      return <Settings />;
    default:
      return <Icon icon={icon} width="40" height="40" />;
  }
}

function getActiveTab(pathname: string, title: string): string {
  const curTab = pathname.split('/');
  if (curTab[curTab.length - 1].includes(title.toLowerCase())) {
    return 'bg-custom-orange';
  }

  return '';
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarProvider
      className="w-1/6 overflow-hidden items-center bg-custom-green-2"
      style={{
        backgroundImage: `url("/home/ecosystem-bg.svg")`,
        // backgroundBlendMode: 'screen',
        backgroundBlendMode: 'soft-light',
      }}
    >
      <Sidebar className="w-1/6 px-2" style={{ background: 'none' }}>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-10 overflow-hidden w-full h-20 border-b rounded-none">
              <Image
                src="/images/Logo.svg"
                alt="niger-delta-logo"
                width={400}
                height={400}
                className="w-full h-full"
              />
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-4">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`hover:bg-custom-orange hover:text-white px-4 py-6 text-white !rounded-sm ${getActiveTab(pathname, item.title)}`}
                    >
                      <Link
                        href={item.url}
                        className="text-xl font-poppins flex items-center gap-4"
                      >
                        {renderIcon(item.icon)}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
