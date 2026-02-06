'use client';

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import koLocale from '@fullcalendar/core/locales/ko';
import styles from '../app/page.module.css';

interface ScheduleCalendarProps {
  apiKey: string;
  calendarId: string;
}

export const ScheduleCalendar = ({ apiKey, calendarId }: ScheduleCalendarProps) => {
  return (
    <div className='calendar-wrapper'>
      <style jsx global>{`
        .fc {
          font-family: var(--font-outfit);
          color: var(--foreground);
          --fc-border-color: var(--border);
          --fc-button-bg-color: var(--primary);
          --fc-button-border-color: var(--primary);
          --fc-button-hover-bg-color: var(--primary-hover);
          --fc-button-hover-border-color: var(--primary-hover);
          --fc-button-active-bg-color: var(--primary-hover);
          --fc-button-active-border-color: var(--primary-hover);
          --fc-event-bg-color: var(--accent);
          --fc-event-border-color: var(--accent);
          --fc-today-bg-color: rgba(37, 99, 235, 0.05);
        }
        
        .fc .fc-toolbar-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .fc .fc-col-header-cell-cushion {
          padding: 1rem 0;
          font-weight: 600;
          color: var(--secondary);
        }

        .fc-theme-standard td, .fc-theme-standard th {
          border-color: var(--border);
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .fc .fc-toolbar {
            flex-direction: column;
            gap: 1rem;
          }
          
          .fc .fc-toolbar-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        locale={koLocale}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listMonth'
        }}
        titleFormat={{ year: 'numeric', month: 'long' }}
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: calendarId
        }}
        eventClick={(arg) => {
          // Prevent default browser action (opening Google Calendar)
          arg.jsEvent.preventDefault();
          if (arg.event.url) {
            window.open(arg.event.url, '_blank', 'noopener,noreferrer');
          }
        }}
        height="auto"
        aspectRatio={1.5}
      />
    </div>
  );
};
