class SimpleScrollSpy {
  constructor(sections, links, selectedLinkClass, offset = 20) {
    this.sections = sections;
    this.links = links;
    this.selectedLinkClass = selectedLinkClass;
    this.offset = offset;
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    this.sections.forEach(section => {
      if (section.offsetTop <= scrollPosition + this.offset) {
        this.links.forEach(link => {
          link.href.endsWith(`#${section.id}`)
            ? link.classList.add(this.selectedLinkClass)
            : link.classList.remove(this.selectedLinkClass);
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let sections = document.querySelectorAll('.documentation__section');
  let links = document.querySelectorAll('.navigation__list-item');
  let selectedLinkClass = 'navigation__list-item--selected';
  new SimpleScrollSpy(
    Array.from(sections),
    Array.from(links),
    selectedLinkClass
  );
});
