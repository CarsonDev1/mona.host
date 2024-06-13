import { useEffect } from "react";

interface ClassActive {
  // selector: string;
  // config: {};
  rootMargin: string;
  threshold: number[];
}

export default function useAddClassActive(selector: string, config: ClassActive) {
  useEffect(() => {
    const addActives = document.querySelectorAll(selector);

    const observerAddActives = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('active')
        } else {
          entry.target.classList.remove('active')
        }
      });
    }, config);

    addActives.forEach(ele => {
      observerAddActives.observe(ele);
    });
  },[])
}