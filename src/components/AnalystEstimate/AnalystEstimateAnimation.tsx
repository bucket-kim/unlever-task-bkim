import gsap from "gsap";

const handleAnalystAnimation = (listRef: HTMLDivElement, openMenu: boolean) => {
  if (openMenu) {
    gsap.to(listRef, {
      visibility: "visible",
      opacity: 1,
      duration: 0.2,
    });
  } else {
    gsap.to(listRef, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        if (!listRef) return;
        listRef.style.visibility = "hidden";
      },
    });
  }
};

export { handleAnalystAnimation };
