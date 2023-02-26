const tableEl = document.querySelector(`.customer-table`);

const toggleIsActive = ({ target }) => {
  if (!target.dataset.active) return;
  target.classList.toggle(`active`);
  target.textContent = target.classList.contains("active")
    ? "Inactive"
    : "Active";
};

tableEl.addEventListener(`click`, toggleIsActive);
