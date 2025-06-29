const STORAGE_KEY = "facultyStatus";

export const saveStatus = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadStatus = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};
