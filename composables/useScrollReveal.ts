export function useScrollReveal() {
  const observeElements = () => {
    if (typeof window === 'undefined') return

    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 100) // Stagger effect within same batch
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))
  }

  return {
    observeElements,
  }
}
