import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { servicesDropdownItems } from './servicesDropdownItems';

const PANEL_TRANSITION = { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const };

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const location = useLocation();
  const isActive = location.pathname.startsWith('/services');

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = (delay = 120) => {
    closeTimer.current = setTimeout(() => setOpen(false), delay);
  };

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [open]);

  const focusItem = (index: number) => {
    const items = itemRefs.current;
    if (!items.length) return;
    const wrapped = (index + items.length) % items.length;
    items[wrapped]?.focus();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMenu();
      requestAnimationFrame(() => focusItem(0));
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusItem(index + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusItem(index - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusItem(itemRefs.current.length - 1);
    } else if (e.key === 'Escape') {
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={() => closeMenu()}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-dropdown-menu"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          'flex items-center gap-1 text-body-sm font-medium transition-colors hover:text-ink relative group focus-visible:outline-none',
          isActive ? 'text-ink' : 'text-ink/60'
        )}
      >
        Services
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')} />
        <span
          className={cn(
            'absolute -bottom-1 left-0 h-0.5 bg-ink transition-transform origin-left duration-300',
            open || isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="services-dropdown-menu"
            role="menu"
            aria-label="Services"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={PANEL_TRANSITION}
            onMouseEnter={openMenu}
            onMouseLeave={() => closeMenu()}
            className="absolute left-0 top-full mt-4 w-64 max-w-[calc(100vw-2rem)] rounded-lg border border-hairline bg-canvas shadow-card p-2 z-50 origin-top-left"
          >
            <div className="flex flex-col gap-0.5">
              {servicesDropdownItems.map((item, index) => {
                const itemActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.slug}
                    ref={(el) => (itemRefs.current[index] = el)}
                    to={item.path}
                    role="menuitem"
                    onKeyDown={(e) => handleItemKeyDown(e, index)}
                    onClick={() => {
                      setOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className={cn(
                      'flex items-center gap-2.5 rounded-md px-2.5 py-2.5 transition-colors duration-150 focus-visible:outline-none focus-visible:bg-surface-soft',
                      itemActive ? 'bg-surface-soft' : 'hover:bg-surface-soft'
                    )}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-md bg-surface-soft text-ink flex-shrink-0 [&_svg]:h-4 [&_svg]:w-4">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-ink leading-snug">{item.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-1 pt-1.5 border-t border-hairline">
              <Link
                to="/services"
                onClick={() => {
                  setOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-ink rounded-md p-2.5 hover:bg-surface-soft transition-colors duration-150"
              >
                View All Services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown;
