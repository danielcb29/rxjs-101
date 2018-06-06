
export default (sectionId, template) => {
    const section = document.getElementById(sectionId);
    section.innerHTML = template;
}