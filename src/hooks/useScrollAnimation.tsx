import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    const element = ref.current;
    if (element) {
      // Add initial opacity-0 class
      element.classList.add('opacity-0');
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return ref;
};

// Hook for animating multiple children with stagger effect
export const useStaggeredAnimation = (staggerDelay: number = 100) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[];
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-slide-up');
                child.classList.remove('opacity-0', 'translate-y-8');
              }, index * staggerDelay);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    const container = containerRef.current;
    if (container) {
      // Initialize children with opacity-0 and transform
      const children = Array.from(container.children) as HTMLElement[];
      children.forEach((child) => {
        child.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      });
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [staggerDelay]);

  return containerRef;
};